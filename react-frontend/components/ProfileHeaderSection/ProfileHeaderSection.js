import {
    Box, 
    Stack
} from '@chakra-ui/react'

import UserNameText from '../UserNameText/UserNameText'
import UserUsernameText from '../UserUsernameText/UserUsernameText'
import UserProfileAvatar from '../UserProfileAvatar/UserProfileAvatar'
import EditProfileModalBtn from '../EditProfileModalBtn/EditProfileModalBtn'

function ProfileHeaderSection({ name, username, bio, profileImgUrl }) {
    return (
        <Box
            rounded='8px'
            p='20px' 
            bg='clubhousegrey.200'
        >
            <Box h='100px'></Box>
            <Stack  
                direction='row' 
                justify='space-between'
            >
                <Stack direction='row' spacing={4} mb={4}>
                    <UserProfileAvatar />
                    <Box>
                        <UserNameText text={name}/>
                        <UserUsernameText text={username}/>
                    </Box>
                </Stack>
                <EditProfileModalBtn name={name} username={username} bio={bio} profileImgUrl={profileImgUrl}/>
            </Stack>
        </Box>
    )
}

export default ProfileHeaderSection
