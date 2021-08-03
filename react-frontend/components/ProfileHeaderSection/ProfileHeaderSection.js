import {
    Box, 
    Stack
} from '@chakra-ui/react'

import UserNameText from '../UserNameText/UserNameText'
import UserUsernameText from '../UserUsernameText/UserUsernameText'
import UserProfileAvatar from '../UserProfileAvatar/UserProfileAvatar'
import EditProfileModalBtn from '../EditProfileModalBtn/EditProfileModalBtn'
import ProfileFollowBtn from '../ProfileFollowBtn/ProfileFollowBtn'

function ProfileHeaderSection({ id, name, username, bio, profileImgUrl, isUser, following }) {
    const isExistingFollower = (id, following) => {
        if (following.filter(userFollowing => userFollowing.id == id).length > 0) {
            return true
        } else {
            return false
        }
    }

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
                {isUser 
                ? <EditProfileModalBtn name={name} username={username} bio={bio} profileImgUrl={profileImgUrl} />
                : <ProfileFollowBtn id={id} name={name} isFollowing={isExistingFollower(id, following)} />}
            </Stack>
        </Box>
    )
}

export default ProfileHeaderSection
