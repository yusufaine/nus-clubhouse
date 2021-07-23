import {
    Text,
    Box,
    Stack,
    FormControl,
    FormErrorMessage,
    ButtonGroup
} from '@chakra-ui/react'
import { 
    Formik, 
    Form, 
    Field 
} from 'formik'
const Yup = require('yup')

import ProfileNameInput from '../ProfileNameInput/ProfileNameInput'
import ProfileUsernameInput from '../ProfileUsernameInput/ProfileUsernameInput'
import ProfileBioInput from '../ProfileBioInput/ProfileBioInput'
import ClubhouseBtn from '../ClubhouseBtn/ClubhouseBtn'

const profileSchema = Yup.object().shape({
    name: Yup.string().required('Room name is required'),
    username: Yup.string().required('Room type is required'),
    bio: Yup.string(),
    profileImgUrl: Yup.string()
})

function NewRoomForm({ initialValues, handleSubmit, handleClose }) {
    return (
        <Formik
            enableReinitialize  
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={profileSchema}
        >
            {(props) => (
                <Form>
                    <Box w='100%' mb='20px'>
                        <Text color='clubhousegrey.900' mb='8px' fontSize='sm'>Display name</Text>
                        <Field name='name'>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.name && form.touched.name}>
                                    <ProfileNameInput field={field} valid={!form.errors.name && form.touched.name} w='100%' />
                                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                    </Box>
                    <Box w='100%' mb='20px'>
                        <Text color='clubhousegrey.900' mb='8px' fontSize='sm'>Username</Text>
                        <Field name='username' >
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.username && form.touched.username}>
                                    <ProfileUsernameInput field={field} valid={!form.errors.username && form.touched.username} w='100%' />
                                    <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                    </Box>
                    <Box w='100%' h='88px'>
                        <Text color='clubhousegrey.900' mb='8px' fontSize='sm'>Bio</Text>
                        <Field name='bio' >
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.bio && form.touched.bio}>
                                    <ProfileBioInput field={field} valid={!form.errors.bio && form.touched.bio} w='100%' h='100%'/>
                                    <FormErrorMessage>{form.errors.bio}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                    </Box>
                    <ButtonGroup spacing='30px' mt='32px'>
                        <ClubhouseBtn 
                            variant='primary' 
                            text='Save' 
                            type='submit' 
                            isLoading={props.isSubmitting} 
                            onClick={handleSubmit}
                        />
                        <ClubhouseBtn 
                            variant='link' 
                            text='Cancel' 
                            onClick={handleClose}
                        />
                    </ButtonGroup>
                </Form>
            )}
        </Formik>
    )
}

export default NewRoomForm
