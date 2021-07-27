import { useContext } from 'react'
import {
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from "@chakra-ui/react"
import { useRouter } from 'next/router'

import { callAPI } from '../../context/AuthContext'
import AuthContext from '../../context/AuthContext'
import ClubhouseBtn from '../ClubhouseBtn/ClubhouseBtn'
import BoldText from "../BoldText/BoldText"
import NewRoomForm from '../NewRoomForm/NewRoomForm'
import NewScheduledRoomForm from '../NewScheduledRoomForm/NewScheduledRoomForm'

function NewRoomModalBtn({ isScheduled }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const router = useRouter()
    const { user } = useContext(AuthContext)

    const initialValues = isScheduled ? {
        name: '',
        type: 'public',
        bio: '',
        scheduleDate: ''
    } : {
        name: '',
        type: 'public',
        bio: ''
    }
    
    const handleCreateNewRoom = async (values, actions) => {
        const body = {
            user_id: user.id,
            room: {
                name: values.name,
                type: values.type,
                bio: values.bio,
                isScheduled: values.scheduleDate && values.scheduleDate != '' ? true : false,
                scheduledStart:  values.scheduleDate ? values.scheduleDate : null
            }
        }
        console.log('creating room with body: ', body)
        const data = await callAPI('/rooms/create', 'POST', body)
        const room = data.data
        console.log('data after creating room: ', data)
        router.push(`/room/${room.id}`)
    }

    const handleCreateNewScheduledRoom = async (values, actions) => {
        const body = {
            user_id: user.id,
            room: {
                name: values.name,
                type: values.type,
                bio: values.bio,
                isScheduled: true,
                scheduledStart:  values.scheduleDate
            }
        }
        console.log('creating scheduled room with body: ', body)
        const data = await callAPI('/rooms/create', 'POST', body)
        console.log('data after creating scheduled room: ', data)
    }

    return (
        <> 
            <ClubhouseBtn variant='primary' text='New room' onClick={onOpen}/>
            <Modal isOpen={isOpen} onClose={onClose} isCentered size='lg'>
                <ModalOverlay />
                <ModalContent bg='clubhousegrey.200' p='20px' rounded='lg'>
                    <ModalHeader>
                        <BoldText text={isScheduled ? 'New scheduled room' : 'New room'}/>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text mb='20px'>Fill the following fields to start a room</Text>
                        {isScheduled ? 
                        <NewScheduledRoomForm
                            initialValues={initialValues} 
                            handleSubmit={handleCreateNewScheduledRoom}
                            handleClose={onClose}
                        /> :
                        <NewRoomForm 
                            initialValues={initialValues} 
                            handleSubmit={handleCreateNewRoom}
                            handleClose={onClose}
                        />}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default NewRoomModalBtn
