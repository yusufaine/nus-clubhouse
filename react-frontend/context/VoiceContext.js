import { createContext, useState, useEffect } from 'react'
// import { Socket } from 'phoenix'
import { Device } from 'mediasoup-client'
import { io } from 'socket.io-client'

const VoiceContext = createContext()

export const VoiceProvider = (props) => {
    // voice stuff
    const [device, setDevice] = useState(null)
    const [producerTransport, setProducerTransport] = useState(null)
    const [consumerTransport, setConsumerTransport] = useState(null)
    const [isOpen, setIsOpen] = useState(false)

    const consumers = {}
    const producers = {}
    const producerLabel = new Map()
    const eventListeners = new Map()
    const socket = io("https://api.nusclubhouse.games:3020")

    const mediaType = {
        audio: 'audioType',
    }

    const EVENTS = {
        exitRoom: 'exitRoom',
        openRoom: 'openRoom',
        startAudio: 'startAudio',
        stopAudio: 'stopAudio',
    }

    const joinRoomVoiceChannel = (name, room_id) => {
        if (isOpen) {
            console.log('already connected to a room')
        } else {
            startRoomClient(name, room_id)
            addListeners()
        }
    }
      
    const addListeners = () => {
        on(EVENTS.stopAudio, () => {
            console.log('stop audio event happened!')
        })
        on(EVENTS.startAudio, () => {
            console.log('start audio event happened!')
        })
        on(EVENTS.exitRoom, () => {
            console.log('exit room event happened!')
        })
    }

    const startRoomClient = async (name, room_id) => {
        Object.keys(EVENTS).forEach(function (evt) {
            eventListeners.set(evt, [])
        })

        console.log('eventListeners value: ', eventListeners)
        console.log('socket value: ', socket)
    
        createRoom(room_id).then(async function () {
            console.log(`created voice room of id: ${room_id}, joining voice room...`)
            await join(name, room_id)
            console.log('initializing sockets...')
            initSockets()
            setIsOpen(true)
            // successCallback()
        })

        console.log('producing audio data with mediaType: ', mediaType.audio)
        produce(mediaType.audio)
    }

    const createRoom = async (room_id) => {
        console.log('creating room with id: ', room_id)
        await socket.emit('createRoom', { room_id }, (res) => {
            console.log('response from socket emit createRoom: ', res)
        })
    }

    const join = async (name, room_id) => {
        socket.emit('join', { name, room_id }, async function (res) {
            console.log(res)
            socket.emit('getRouterRtpCapabilities', async function (data) {
                console.log('routerRtpCapabilities: ', data)
                let deviceLoaded = await loadDevice(data)
                setDevice(deviceLoaded)
                console.log('device has been set to: ', deviceLoaded)
                await initTransports(deviceLoaded)
                socket.emit('getProducers')
            });
        })
    }

    const loadDevice = async (routerRtpCapabilities) => {
        let device
        try {
            device = new Device();
        } catch (error) {
            if (error.name === 'UnsupportedError') {
                console.error('browser not supported');
            }
            console.error(error)
        }
        await device.load({ routerRtpCapabilities })
        return device
    }

    const initTransports = async (device) => {
        // init producerTransport
        socket.emit('createWebRtcTransport', {
            forceTcp: false,
            rtpCapabilities: device.rtpCapabilities,
        }, (data) => {
            console.log('createWebRtcTransport socket emit successful!!!')
            if (data.error) {
                console.error(data.error);
                return;
            }
            console.log('data returned from webRtcTransport socket call: ', data)
            console.log('device used to create producerTransportData: ', device)

            const producerTransportData = device.createSendTransport(data)
            console.log('creating producerTransport with device.createSendTransport: ', producerTransportData)

            producerTransportData.on('connect', async function ({
                dtlsParameters
            }, callback, errback) {
                socket.emit('connectTransport', {
                    dtlsParameters,
                    transport_id: data.id
                }, (response) => {
                    console.log('response status from connectTransport emit: ', response)
                })
            });

            producerTransportData.on('produce', async function ({
                kind,
                rtpParameters
            }, callback, errback) {
                try {
                    socket.emit('produce', {
                        producerTransportId: producerTransport.id,
                        kind,
                        rtpParameters,
                    }, ({ producer_id }) => {
                        callback({ id: producer_id });
                    });

                } catch (err) {
                    errback(err);
                }
            })

            producerTransportData.on('connectionstatechange', function (state) {
                switch (state) {
                    case 'connecting':
                        break;

                    case 'connected':
                        //localVideo.srcObject = stream
                        break;

                    case 'failed':
                        producerTransport.close();
                        break;

                    default:
                        break;
                }
            });

            setProducerTransport(producerTransportData)
        })

        // init consumerTransport
        socket.emit('createWebRtcTransport', { forceTcp: false }, (data) => {
            if (data.error) {
                console.error(data.error);
                return;
            }

            // only one needed
            const consumerTransportData = device.createRecvTransport(data)
            consumerTransportData.on('connect', function ({ dtlsParameters }, callback, errback) {
                socket.emit('connectTransport', {
                    transport_id: consumerTransport.id,
                    dtlsParameters
                }, (response) => {
                    console.log('connectTransport response status: ', response)
                })
            });

            consumerTransportData.on('connectionstatechange', async function (state) {
                switch (state) {
                    case 'connecting':
                        break;

                    case 'connected':
                        //remoteVideo.srcObject = await stream;
                        //await socket.request('resume');
                        break;

                    case 'failed':
                        consumerTransport.close();
                        break;

                    default:
                        break;
                }
            });

            setConsumerTransport(consumerTransportData)
        });
    }

    const initSockets = () => {
        socket.on('consumerClosed', function ({
            consumer_id
        }) {
            console.log('closing consumer:', consumer_id)
            removeConsumer(consumer_id)
        })

        /**
         * data: [ {
         *  producer_id:
         *  producer_socket_id:
         * }]
         */
        socket.on('newProducers', async function (data) {
            console.log('new producers', data)
            for (let { producer_id } of data) {
                await consume(producer_id)
            }
        })

        socket.on('disconnect', function () {
            exit(true)
        })
    }

    const produce = async (type, deviceId = null) => {
        let mediaConstraints = {}
        let audio = false
        switch (type) {
            case mediaType.audio:
                mediaConstraints = {
                    audio: {
                        deviceId: deviceId
                    },
                    video: false
                }
                audio = true
                break
            default:
                return
                break;
        }
        if (producerLabel.has(type)) {
            console.log('producer already exists for this type ' + type)
            return
        }
        console.log('mediacontraints:',mediaConstraints)
        let stream;
        try {
            stream = await navigator.mediaDevices.getUserMedia(mediaConstraints)
            console.log('mediaDevices constraints: ', navigator.mediaDevices.getSupportedConstraints())

            const track = stream.getAudioTracks()[0]
            const params = { track };
            
            console.log('producer transport value: ', producerTransport)
            producer = await producerTransport.produce(params)

            console.log('producer', producer)

            producers.set(producer.id, producer)

            producer.on('trackended', () => {
                closeProducer(type)
            })

            producer.on('transportclose', () => {
                console.log('producer transport close')
                // if (!audio) {
                //     elem.srcObject.getTracks().forEach(function (track) {
                //         track.stop()
                //     })
                //     elem.parentNode.removeChild(elem)
                // }
                producers.delete(producer.id)
            })

            producer.on('close', () => {
                console.log('closing producer')
                if (!audio) {
                    elem.srcObject.getTracks().forEach(function (track) {
                        track.stop()
                    })
                    elem.parentNode.removeChild(elem)
                }
                producers.delete(producer.id)
            })

            producerLabel.set(type, producer.id)

            switch (type) {
                case mediaType.audio:
                    event(EVENTS.startAudio)
                    break
                default:
                    return
                    break;
            }
        } catch (err) {
            console.log(err)
        }
    }

    const consume = async (producer_id) => {
        //let info = await roomInfo()
        getConsumeStream(producer_id).then(function ({
            consumer,
            stream,
            kind
        }) {
            consumers.set(consumer.id, consumer)
            console.logo('new consumer created, updated list of consumer: ', consumers)

            // let elem;
            // elem = document.createElement('audio')
            // elem.srcObject = stream
            // elem.id = consumer.id
            // elem.playsinline = false
            // elem.autoplay = true
            // remoteAudioEl.appendChild(elem)
            
            consumer.on('trackended', function () {
                removeConsumer(consumer.id)
            })
            consumer.on('transportclose', function () {
                removeConsumer(consumer.id)
            })
        })
    }

    const getConsumeStream = async (producerId) => {
        const { rtpCapabilities } = device
        socket.emit('consume', {
            rtpCapabilities,
            consumerTransportId: consumerTransport.id, // might be 
            producerId
        }, async function (data) {
            const { id, kind, rtpParameters } = data;
            let codecOptions = {};

            const consumer = await consumerTransport.consume({
                id,
                producerId,
                kind,
                rtpParameters,
                codecOptions,
            })
            const stream = new MediaStream();
            stream.addTrack(consumer.track);
            return { consumer, stream, kind }
        });
    }

    const closeProducer = (type) => {
        if (!producerLabel.has(type)) {
            console.log('there is no producer for this type ' + type)
            return
        }
        let producer_id = producerLabel.get(type)
        console.log(producer_id)
        socket.emit('producerClosed', { producer_id })
        producers.get(producer_id).close()
        producers.delete(producer_id)
        producerLabel.delete(type)

        if (type !== mediaType.audio) {
            let elem = document.getElementById(producer_id)
            elem.srcObject.getTracks().forEach(function (track) {
                track.stop()
            })
            elem.parentNode.removeChild(elem)
        }

        switch (type) {
            case mediaType.audio:
                this.event(EVENTS.stopAudio)
                break
            default:
                return
                break;
        }
    }

    const pauseProducer = (type) => {
        if (!producerLabel.has(type)) {
            console.log('there is no producer for this type ' + type)
            return
        }
        let producer_id = producerLabel.get(type)
        producers.get(producer_id).pause()
    }

    const resumeProducer = (type) => {
        if (!producerLabel.has(type)) {
            console.log('there is no producer for this type ' + type)
            return
        }
        let producer_id = producerLabel.get(type)
        producers.get(producer_id).resume()
    }

    const removeConsumer = (consumer_id) => {
        let elem = document.getElementById(consumer_id)
        elem.srcObject.getTracks().forEach(function (track) {
            track.stop()
        })
        elem.parentNode.removeChild(elem)

        consumers.delete(consumer_id)
    }

    const exit = (offline = false) => {
        const clean = () => {
            setIsOpen(false)
            consumerTransport.close()
            producerTransport.close()
            socket.off('disconnect')
            socket.off('newProducers')
            socket.off('consumerClosed')
        }

        if (!offline) {
            socket.emit('exitRoom', (response) => {
                console.log('response data from exitRoom call: ', response)
            })
        } else {
            clean()
        }

        event(EVENTS.exitRoom)
    }

    ///////  HELPERS //////////

    const roomInfo = async () => {
        socket.emit('getMyRoomInfo', (info) => {
            return info
        })
    }

    const event = (evt) => {
        if (eventListeners.has(evt)) {
            eventListeners.get(evt).forEach(callback => callback())
        }
    }

    const on = (evt, callback) => {
        eventListeners.get(evt).push(callback)
    }

    return (
        <VoiceContext.Provider value={{ 
            joinRoomVoiceChannel,
            produce
        }}>
            {props.children}
        </VoiceContext.Provider>
    )
}

export default VoiceContext