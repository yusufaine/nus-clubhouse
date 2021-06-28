import {
    InputGroup,
    InputLeftElement
} from '@chakra-ui/react'
import { AtSignIcon } from '@chakra-ui/icons'

import ClubhouseInput from '../ClubhouseInput/ClubhouseInput'

function UsernameInputGroup({ field, id }) {
    return (
        <InputGroup>
            <InputLeftElement
                pointerEvents='none'
                children={<AtSignIcon />}
            />
            <ClubhouseInput {...field} id={id} placeholder='Username' pl={10}/>
        </InputGroup>
    )
}

export default UsernameInputGroup
