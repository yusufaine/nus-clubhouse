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
import EmailInputGroup from '../EmailInputGroup/EmailInputGroup'
import PasswordInputGroup from '../PasswordInputGroup/PasswordInputGroup'

function UserLoginForm({ handleSubmit }) {
    const validNusEmailRegex = /(@|u.)nus.edu/
    const loginSchema = Yup.object().shape({
        email: Yup.string()
                    .email('Invalid email')
                    .matches(validNusEmailRegex, 'Your NUS email is required to join NUS Clubhouse')
                    .required('Your NUS email is required'),
        password: Yup.string()
                    .password()
                    .required('Your password is required')
                    .min(8, 'Password must contain at least 8 characters')
                    .minNumbers(1, 'Password must contain at least 1 digit')
                    .minSymbols(1, 'Password must contain at least 1 symbol')
    })

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={handleSubmit}
            validationSchema={loginSchema}
        >
            {(props) => (
                <Form>
                    <Box mb={4}>
                        <Field name='email' >
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.email && form.touched.email}>
                                    <FormLabel>Email</FormLabel>
                                    <EmailInputGroup field={field} id='email'/>
                                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                    </Box>
                    <Box mb={8}>
                        <Field name='password' >
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.password && form.touched.password}>
                                    <FormLabel>Password</FormLabel>
                                    <PasswordInputGroup field={field} id='password'/>
                                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                    </Box>
                    <ClubhouseBtn text='Log in' variant='primary' type='submit' isLoading={props.isSubmitting} />
                </Form>
            )}
        </Formik>
    )
}

export default UserLoginForm
