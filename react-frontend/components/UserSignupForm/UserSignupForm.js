import {
    Box,
    FormControl,
    FormLabel,
    FormErrorMessage
} from '@chakra-ui/react'
import { Formik, Form, Field } from 'formik'
const Yup = require('yup')
require('yup-password')(Yup)

import ClubhouseBtn from '../ClubhouseBtn/ClubhouseBtn'
import NameInputGroup from '../NameInputGroup/NameInputGroup'
import EmailInputGroup from '../EmailInputGroup/EmailInputGroup'
import PasswordInputGroup from '../PasswordInputGroup/PasswordInputGroup'
import UsernameInputGroup from '../UsernameInputGroup/UsernameInputGroup'

function UserSignupForm({ handleSubmit }) {
    const validNusEmailRegex = /(@|u.)nus.edu/
    const signupSchema = Yup.object().shape({
        signup_name: Yup.string()
                    .required('Your name is required'),
        signup_username: Yup.string()
                    .required('Your username is required'),
        signup_email: Yup.string()
                    .email('Invalid email')
                    // .matches(validNusEmailRegex, 'Your NUS email is required to join NUS Clubhouse')
                    .required('Your NUS email is required'),
        signup_password: Yup.string()
                    .password()
                    .required('Your password is required')
                    .min(8, 'Password must contain at least 8 characters')
                    .minNumbers(1, 'Password must contain at least 1 digit')
                    .minSymbols(1, 'Password must contain at least 1 symbol')
    })

    return (
        <Formik
            initialValues={{ signup_name: '', signup_username: '', signup_email: '', signup_password: '' }}
            onSubmit={handleSubmit}
            validationSchema={signupSchema}
        >
            {(props) => (
                <Form>
                    <Box mb={4}>
                        <Field name='signup_name' >
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.signup_name && form.touched.signup_name}>
                                    <FormLabel>Name</FormLabel>
                                    <NameInputGroup field={field} id='signup_name'/>
                                    <FormErrorMessage>{form.errors.signup_name}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                    </Box>
                    <Box mb={4}>
                        <Field name='signup_username' >
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.signup_username && form.touched.signup_username}>
                                    <FormLabel>Username</FormLabel>
                                    <UsernameInputGroup field={field} id='signup_username'/>
                                    <FormErrorMessage>{form.errors.signup_username}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                    </Box>
                    <Box mb={4}>
                        <Field name='signup_email' >
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.signup_email && form.touched.signup_email}>
                                    <FormLabel>Email</FormLabel>
                                    <EmailInputGroup field={field} id='signup_email'/>
                                    <FormErrorMessage>{form.errors.signup_email}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                    </Box>
                    <Box mb={8}>
                        <Field name='signup_password' >
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.signup_password && form.touched.signup_password}>
                                    <FormLabel>Password</FormLabel>
                                    <PasswordInputGroup field={field} id='signup_password'/>
                                    <FormErrorMessage>{form.errors.signup_password}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                    </Box>
                    <ClubhouseBtn text='Sign up' variant='primary' type='submit' isLoading={props.isSubmitting} />
                </Form>
            )}
        </Formik>
    )
}

export default UserSignupForm
