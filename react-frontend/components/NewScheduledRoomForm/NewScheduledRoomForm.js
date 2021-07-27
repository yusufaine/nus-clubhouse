import {
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

import RoomNameInput from '../RoomNameInput/RoomNameInput'
import RoomTypeSelect from '../RoomTypeSelect/RoomTypeSelect'
import ClubhouseBtn from '../ClubhouseBtn/ClubhouseBtn'
import RoomBioInput from '../RoomBioInput/RoomBioInput'
import RoomScheduleDateInput from '../RoomScheduleDateInput/RoomScheduleDateInput'

const newScheduledRoomSchema = Yup.object().shape({
    name: Yup.string().required('Room name is required'),
    type: Yup.string().required('Room type is required'),
    bio: Yup.string(),
    scheduleDate: Yup.string().required('Room start date is required')
})

function NewScheduledRoomForm({ initialValues, handleSubmit, handleClose }) {
    return (
        <Formik
            enableReinitialize  
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={newScheduledRoomSchema}
        >
            {(props) => (
                <Form>
                    <Stack direction='row' spacing='20px' mb='20px'>
                        <Box>
                            <Field name='name'>
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                                        <RoomNameInput field={field} valid={!form.errors.name && form.touched.name} w='293px'/>
                                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                        </Box>
                        <Box w='100%'>
                            <Field name='type' >
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.type && form.touched.type}>
                                        <RoomTypeSelect field={field} valid={!form.errors.type && form.touched.type} w='100%'/>
                                        <FormErrorMessage>{form.errors.type}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                        </Box>
                    </Stack>
                    <Box w='100%'>
                        <Field name='scheduleDate'>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.scheduleDate && form.touched.scheduleDate}>
                                    <RoomScheduleDateInput field={field} valid={!form.errors.scheduleDate && form.touched.scheduleDate} w='100%'/>
                                    <FormErrorMessage>{form.errors.scheduleDate}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                    </Box>
                    <Box w='100%' h='88px' mb='30px'>
                        <Field name='scheduleDate' >
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.scheduleDate && form.touched.scheduleDate}>
                                    <RoomBioInput field={field} valid={!form.errors.scheduleDate && form.touched.scheduleDate} w='100%' h='100%'/>
                                    <FormErrorMessage>{form.errors.scheduleDate}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                    </Box>
                    <ButtonGroup spacing='30px'>
                        <ClubhouseBtn 
                            variant='primary' 
                            text='New room' 
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

export default NewScheduledRoomForm
