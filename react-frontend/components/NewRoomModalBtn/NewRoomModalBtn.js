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

function NewRoomModalBtn() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const router = useRouter()
    const { user } = useContext(AuthContext)
    const initialValues = {
        name: '',
        type: 'public',
        bio: ''
    }
    
    const handleCreateNewRoom = async (values, actions) => {
        delete values.bio
        const body = {
            user_id: user.id,
            room: {
                name: values.name,
                numUsers: 0,
                type: values.type,
            }
        }
        console.log('creating room with body: ', body)
        const data = await callAPI('/rooms/create', 'POST', body)
        const room = data.data
        console.log('data after creating room: ', data)
        router.push(`/room/${room.id}`)
    }

    return (
        <> 
            <ClubhouseBtn variant='primary' text='New room' onClick={onOpen}/>
            <Modal isOpen={isOpen} onClose={onClose} isCentered size='lg'>
                <ModalOverlay />
                <ModalContent bg='clubhousegrey.200' p='20px' rounded='lg'>
                    <ModalHeader><BoldText text='New room'/></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text mb='20px'>Fill the following fields to start a new room</Text>
                        <NewRoomForm 
                            initialValues={initialValues} 
                            handleSubmit={handleCreateNewRoom}
                            handleClose={onClose}
                        />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default NewRoomModalBtn
