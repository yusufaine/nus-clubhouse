import { createContext, useState, useEffect } from 'react'
import { Socket } from 'phoenix'
import { useRouter } from 'next/router'

import { API_URL, SOCKET_URL } from '../utils/utils'

const AuthContext = createContext()

export const callAPI = async (path, method, body) => {
    console.log('fetching...')
    const response = await fetch(`${API_URL}${path}`, {
        method,
        headers: {
            "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(body)
    })
    const data = await response.json()
    return data
}

export const AuthProvider = (props) => {
    const [user, setUser] = useState('')
    const [roomData, setRoomData] = useState(null)
    const router = useRouter()

    const successToast = (text, subtext="", toast) => {
        return toast({
            title: text,
            description: subtext,
            status: 'success',
            duration: 5000,
            isClosable: true,
        })
    }

    const errorToast = (text, subtext="", toast) => {
        return toast({
            title: text,
            description: subtext,
            status: 'error',
            duration: 3000,
            isClosable: true,
        })
    }

    const fetchLiveRooms = async () => {
        try {
            const data = await callAPI('/rooms', 'GET')
            if(!data.data) {
                console.error("Failed to load rooms. Please try again. ", data)
            } else {
                return data.data
            }
        } catch (err) {
            console.error(err)
        }
    }

    const fetchRoom = async (roomId, toast) => {
        const errorToast = (errorText, errorSubtext) => toast({
            title: errorText,
            description: errorSubtext,
            status: 'error',
            duration: 3000,
            isClosable: true,
        })

        console.log('joinin room channel...')
        const socket = new Socket(SOCKET_URL)
        socket.connect()

        const userDetails = {
            id: user.id,
            username: user.username,
            profileImgUrl: user.profileImgUrl,
        }

        const channel = socket.channel(`room:${roomId}`, userDetails)
        console.log(channel)

        channel.join()
        .receive('ok', ({id, room, pid}) => {
            console.log('room id: ', id)
            console.log('room data: ', room)
            setRoomData(room)
            console.log('room pid: ', pid)
            console.log('roomDatda data: ', roomData)
        })
        .receive('error', reason => {
            console.error(reason)
            errorToast('Failed to join room', 
            'The room you tried to join no longer exists. Email us at contact@nusclubhouse.games for help!')
        })

        channel.on('msg', ({msg}) => {
            console.log('msg', msg)
        })

        channel.on('user_joined', ({ new_user, room }) => {
            console.log('user_joined, new user: ',  new_user)
            console.log('existing room data: ', roomData)
            console.log('updated room: ', room)
            setRoomData(room)
            if (roomData) {
                const updatedUsers = []
                if (roomData.users) {
                    roomData.users.map(user => updatedUsers.push(user))
                }
                updatedUsers.push(new_user)
                // const updatedUsers = [...roomData.users, new_user]
                const newRoomData = {
                    id: roomData.id,
                    name: roomData.name,
                    type: roomData.type,
                    isLive: roomData.isLive,
                    creator: roomData.creator,
                    users: updatedUsers,
                }
                setRoomData(newRoomData)
            }
        })

        channel.on('user_left', ({ user_username, room }) => {
            console.log('user_left, left user: ',  user_username)
            console.log('updated room: ', room)
            setRoomData(room)
            if (roomData) {
                const updatedUsers = roomData.users.filter(user => user.username != user_username)
                const newRoomData = {
                    id: room.id,
                    name: room.name,
                    type: room.type,
                    isLive: room.isLive,
                    creator: room.creator,
                    users: updatedUsers,
                }
                setRoomData(newRoomData)
            }
        })

        return () => {
            channel.leave()
            socket.disconnect()
        }
    }

    const registerUser = async (values, toast, actions) => {
        try {
            actions.setSubmitting(true)
            const body =  {
                credentials: {
                    name: values.signup_name,
                    username: values.signup_username,
                    email: values.signup_email,
                    password: values.signup_password,
                }
            }
            const data = await callAPI('/auth/register', 'POST', body)
            
            if(!data.data) {
                console.log("Registration failed. Please try again. ", data)
                errorToast("Failed to register", "", toast)
            } else {
                successToast("Successfully registered account", "Check your NUS email & confirm your account before logging in!", toast)
            }
            actions.setSubmitting(false)
            actions.resetForm({})
        } catch (err) {
            console.error(err)
        }
    }

    /**
     * Login user via 3rd party provider
     * @param {any} token obtained by provider to make authorized requests to get user info from provider (username, email, etc)
     */
    const loginUser = async (values, toast, actions) => {
        try {
            actions.setSubmitting(true)
            const body =  {
                credentials: values
            }
            const data = await callAPI('/auth/login', 'POST', body)
            
            if(data.data) {
                const username = data.data.username
                console.log('Successfully logged in: ', data.data)
                successToast("Successfully logged in", "", toast)
                setUser(data.data)
            } else {
                console.log("Login failed. Please try again.", data)
                errorToast("Failed to log in", "Check your email (if you havent confirmed your account) or contact admin!", toast)
            }
            actions.setSubmitting(false)

        } catch (err) {
            console.error(err)
        }
    }

    /**
     * Logs user out by setting user to null
     */
    const logoutUser = async () => {

    }

    const checkUserLoggedIn = async () => {
        console.log('checking if user logged in.....')
        const data = await callAPI('/auth/me', 'GET')
        if (data.data) {
            console.log('user logged in: ', data.data)
            setUser(data.data)
        } else {
            setUser(null)
        }
    }

    useEffect(() => {
        checkUserLoggedIn()
    }, [])

    useEffect(() => {
        console.log('room data value change detected in authcontext: ', roomData)
    }, [roomData])

    return (
        <AuthContext.Provider value={{ 
            user,
            roomData,
            registerUser, 
            loginUser,
            logoutUser,
            fetchRoom,
            fetchLiveRooms
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext