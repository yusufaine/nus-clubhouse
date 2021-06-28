import { useContext, useState, useEffect } from 'react'
import {
    Box
} from '@chakra-ui/react'

import AuthContext from '../../context/AuthContext'
import UserProfile from '../UserProfile/UserProfile'
import UserFollowerFollowingText from '../UserFollowerFollowingText/UserFollowerFollowingText'
import UserBioText from '../UserBioText/UserBioText'

function UserProfileSection() {
    const { user } = useContext(AuthContext)
    const [userName, setUserName] = useState('')
    const [userUsername, setUserUsername] = useState('')
    const [numFollowers, setNumFollowers] = useState('')
    const [numFollowing, setNumFollowing] = useState('')

    useEffect(() => {
        if (user) {
            setUserUsername(user.username)
            setUserName(user.name)
            setNumFollowers(user.followers.length)
            setNumFollowing(user.following.length)
        }
    }, [user])

    return (
        <Box rounded='lg' p={5} bg='clubhousegrey.200'>
            <UserProfile 
                name={userName} 
                username={userUsername} 
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
