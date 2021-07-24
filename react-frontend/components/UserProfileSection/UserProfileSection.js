import { useContext, useState, useEffect } from 'react'
import {
    Box
} from '@chakra-ui/react'

import AuthContext from '../../context/AuthContext'
import UserProfile from '../UserProfile/UserProfile'
import UserFollowerFollowingText from '../UserFollowerFollowingText/UserFollowerFollowingText'
import UserBioText from '../UserBioText/UserBioText'

function UserProfileSection({ name, username, numFollowers, numFollowing }) {
    return (
        <Box rounded='lg' p={5} bg='clubhousegrey.200'>
            <UserProfile 
                name={name} 
                username={username} 
            />
            <UserFollowerFollowingText 
                numFollowers={numFollowers} 
                numFollowing={numFollowing} 
            />
            <UserBioText />
        </Box>
    )
}

export default UserProfileSection
