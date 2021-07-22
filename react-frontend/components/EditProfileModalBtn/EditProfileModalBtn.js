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
import EditProfileForm from '../EditProfileForm/EditProfileForm'

function EditProfileModalBtn({ name, username, bio, profileImgUrl }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const router = useRouter()
    const { user } = useContext(AuthContext)
    const initialValues = {
        name: name,
        username: username,
        bio: bio,
        profileImgUrl: profileImgUrl
    }
    
    const handleUpdateProfile = async (values, actions) => {
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
            <ClubhouseBtn text='Edit Profile' variant='secondary-small' leftIcon={<EditIcon boxSize='12px' />} />
            <Modal isOpen={isOpen} onClose={onClose} isCentered size='lg'>
                <ModalOverlay />
                <ModalContent bg='clubhousegrey.200' p='20px' rounded='lg'>
                    <ModalHeader><BoldText text='Edit profile'/></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <EditProfileForm 
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

export default EditProfileModalBtn
