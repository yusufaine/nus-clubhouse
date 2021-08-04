import { useContext } from 'react'
import {
    useToast
} from '@chakra-ui/react'

import AuthContext from '../../context/AuthContext'
import ClubhouseBtn from '../ClubhouseBtn/ClubhouseBtn'

function ProfileFollowBtn({ id, name, isFollowing }) {
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
            {isFollowing 
            ? <ClubhouseBtn text='Unfollow' variant='secondary-small' onClick={handleUnfollowUser} />
            : <ClubhouseBtn text='Follow' variant='primary-small' onClick={handleFollowUser} />
            }
        </>
    )
}

export default ProfileFollowBtn
