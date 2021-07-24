import { useContext } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    useToast
} from "@chakra-ui/react"
import { EditIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'

import AuthContext from '../../context/AuthContext'
import ClubhouseBtn from '../ClubhouseBtn/ClubhouseBtn'
import BoldText from "../BoldText/BoldText"
import EditProfileForm from '../EditProfileForm/EditProfileForm'

function EditProfileModalBtn({ name, username, bio, profileImgUrl }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { updateUser } = useContext(AuthContext)
    const toast = useToast()

    const initialValues = {
        name: name,
        username: username,
        bio: bio,
        profileImgUrl: profileImgUrl
    }
    
    const handleUpdateProfile = async (values, actions) => {
        console.log('updating profile!')
        updateUser(values, toast, actions)
    }

    return (
        <> 
            <ClubhouseBtn text='Edit Profile' variant='secondary-small' leftIcon={<EditIcon boxSize='12px' />} onClick={onOpen} />
            <Modal isOpen={isOpen} onClose={onClose} isCentered size='lg'>
                <ModalOverlay />
                <ModalContent bg='clubhousegrey.200' p='20px' rounded='lg'>
                    <ModalHeader><BoldText text='Edit profile'/></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <EditProfileForm 
                            initialValues={initialValues} 
                            handleSubmit={handleUpdateProfile}
                            handleClose={onClose}
                        />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default EditProfileModalBtn
