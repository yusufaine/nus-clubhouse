import {
    Box,
    Stack
} from '@chakra-ui/react'

import UserProfileAvatar from '../UserProfileAvatar/UserProfileAvatar'
import UserNameText from '../UserNameText/UserNameText'
import UserUsernameText from '../UserUsernameText/UserUsernameText'

function UserProfile({ name='Ryan Aidan', username='aidanaden' }) {
    return (
        <Stack direction='row' spacing={4} mb={5}>
            <UserProfileAvatar />
            <Box>
                <UserNameText text={name}/>
                <UserUsernameText text={username}/>
            </Box>
        </Stack>
    )
}

export default UserProfile
