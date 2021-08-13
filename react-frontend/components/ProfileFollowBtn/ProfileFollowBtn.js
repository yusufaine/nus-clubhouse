import { useContext, useState } from 'react'
import {
    useToast
} from '@chakra-ui/react'

import AuthContext from '../../context/AuthContext'
import ClubhouseBtn from '../ClubhouseBtn/ClubhouseBtn'

function ProfileFollowBtn({ id, name, isFollowing }) {
    const [following, setFollowing] = useState(isFollowing)
    const { followUser, unfollowUser } = useContext(AuthContext)
    const toast = useToast()

    console.log('is following status: ', isFollowing)
    
    const successToast = (text) => {
        return toast({
            title: text,
            status: 'success',
            duration: 5000,
            isClosable: true,
        })
    }

    const errorToast = (text) => {
        return toast({
            title: text,
            status: 'error',
            duration: 5000,
            isClosable: true,
        })
    }

    const handleFollowUser = () => {
        try {
            const user = followUser(id)
            setFollowing(true)
            if (user) {
                successToast(`You\'re now following ${name}`)
            } else {
                errorToast(`Error following ${name}`)
            }
        } catch (err) {
            console.error(err)
        }
    }

    const handleUnfollowUser = () => {
        try {
            const user = unfollowUser(id)
            setFollowing(false)
            if (user) {
                successToast(`You\'re now unfollowing ${name}`)
            } else {
                errorToast(`Error unfollowing ${name}`)
            }
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
            <ClubhouseBtn
                text={following ? 'Unfollow' : 'Follow'}
                variant={following ? 'secondary-small' : 'primary-small'}
                onClick={following ? handleUnfollowUser : handleFollowUser}
            />
        </>
    )
}

export default ProfileFollowBtn
