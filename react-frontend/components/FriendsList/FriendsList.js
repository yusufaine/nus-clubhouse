import { 
    Stack 
} from '@chakra-ui/react'

import BoldText from '../BoldText/BoldText'
import HighlightText from '../HighlightText/HighlightText'
import FriendProfileList from '../FriendProfileList/FriendProfileList'

function FriendsList({ users=['user1','user1','user1','user1','user1'] }) {
    return (
        <Stack direction='column' minW='235px'>
            <BoldText text='People' mb={4}/>
            <HighlightText text='online' mb={4}/>
            <FriendProfileList users={users} />
        </Stack>
    )
}

export default FriendsList
