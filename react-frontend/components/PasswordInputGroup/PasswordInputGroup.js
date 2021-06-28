import {
    InputGroup,
    InputLeftElement
} from '@chakra-ui/react'
import { LockIcon } from '@chakra-ui/icons'

import ClubhouseInput from '../ClubhouseInput/ClubhouseInput'

function PasswordInputGroup({ field, id }) {
    return (
        <InputGroup>
            <InputLeftElement
                pointerEvents='none'
                children={<LockIcon />}
            />
            <ClubhouseInput {...field} id={id} type='password' placeholder='Password' pl={10}/>
        </InputGroup>
    )
}

export default PasswordInputGroup
