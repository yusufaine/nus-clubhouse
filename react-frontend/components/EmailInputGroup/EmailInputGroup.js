import {
    InputGroup,
    InputLeftElement
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'

import ClubhouseInput from '../ClubhouseInput/ClubhouseInput'

function EmailInputGroup({ field, id }) {
    return (
        <InputGroup>
            <InputLeftElement
                pointerEvents='none'
                children={<EmailIcon />}
            />
            <ClubhouseInput {...field} id={id} placeholder='NUS Email' pl={10}/>
        </InputGroup>
    )
}

export default EmailInputGroup
