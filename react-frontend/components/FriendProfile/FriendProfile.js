import { 
    Box,
    HStack
} from '@chakra-ui/react'

import UserNameText from '../UserNameText/UserNameText'
import UserUsernameText from '../UserUsernameText/UserUsernameText'
import FriendProfileAvatar from '../FriendProfileAvatar/FriendProfileAvatar'

function FriendProfile({ user }) {
    return (
        <HStack direction='row' spacing={4}>
            <FriendProfileAvatar />
            <Box>
                <UserNameText text='HoloPanio'/>
                <UserUsernameText text='HoloPanio'/>
            </Box>
        </HStack>
    )
}

export default FriendProfile
