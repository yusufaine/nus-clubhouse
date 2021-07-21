import {
    Box
} from '@chakra-ui/react'

import UserFollowerFollowingText from '../UserFollowerFollowingText/UserFollowerFollowingText'

function ProfileAboutSection({ user }) {
    return (
        <Box rounded='8px' p='20px' bg='clubhousegrey.200'>
            <UserFollowerFollowingText 
                numFollowers={user.followers.length}
                numFollowing={user.following.length} 
            />
            <Text mt='20px'>
                User bio text
            </Text>
        </Box>
    )
}

export default ProfileAboutSection
