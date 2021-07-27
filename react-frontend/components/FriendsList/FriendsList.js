import { 
    Stack 
} from '@chakra-ui/react'

import BoldText from '../BoldText/BoldText'
import HighlightText from '../HighlightText/HighlightText'
import FriendProfileList from '../FriendProfileList/FriendProfileList'

function FriendsList({ users }) {
    return (
        <Stack direction='column' minW='235px'>
            <BoldText text='Friends' mb={4}/>
            <HighlightText text='Following' mb={4}/>
            <FriendProfileList users={users} />
        </Stack>
    )
}

export default FriendsList
