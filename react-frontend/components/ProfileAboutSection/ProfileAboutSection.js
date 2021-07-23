import {
    Text,
    Box
} from '@chakra-ui/react'

import UserFollowerFollowingText from '../UserFollowerFollowingText/UserFollowerFollowingText'

function ProfileAboutSection({ numFollowers, numFollowing }) {
    return (
        <Box rounded='8px' p='20px' bg='clubhousegrey.200'>
            <UserFollowerFollowingText 
                numFollowers={numFollowers}
                numFollowing={numFollowing} 
            />
            <Text mt='20px'>
                User bio text
            </Text>
        </Box>
    )
}

export default ProfileAboutSection
