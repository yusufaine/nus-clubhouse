import {
    InputGroup,
    InputLeftElement
} from '@chakra-ui/react'
import { FaUser } from 'react-icons/fa'

import ClubhouseInput from '../ClubhouseInput/ClubhouseInput'

function NameInputGroup({ field, id }) {
    return (
        <InputGroup>
            <InputLeftElement
                pointerEvents='none'
                children={<FaUser />}
            />
            <ClubhouseInput {...field} id={id} placeholder='Name' pl={10}/>
        </InputGroup>
    )
}

export default NameInputGroup