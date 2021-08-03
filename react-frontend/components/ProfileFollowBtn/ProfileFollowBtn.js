import { useContext } from 'react'
import {
    useToast
} from '@chakra-ui/react'

import AuthContext from '../../context/AuthContext'

function ProfileFollowBtn({ id, name, isFollowing }) {
    const { followUser, unfollowUser } = useContext(AuthContext)
    const toast = useToast()
    
    const successToast = () => {
        return toast({
            title: `You\'re now following ${name}`,
            status: 'success',
            duration: 5000,
            isClosable: true,
        })
    }

    const errorToast = () => {
        return toast({
            title: `Error following ${name}`,
            status: 'error',
            duration: 5000,
            isClosable: true,
        })
    }

    const handleFollowUser = () => {
        try {
            const user = followUser(id)
            if (user) {
                successToast()
            } else {
                errorToast()
            }
        } catch (err) {
            console.error(err)
        }
    }

    const handleUnfollowUser = () => {
        try {
            const user = unfollowUser(id)
            if (user) {
                successToast()
            } else {
                errorToast()
            }
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <> {isFollowing 
            ? <ClubhouseBtn text='Unfollow' variant='secondary-small' onClick={handleUnfollowUser} />
            : <ClubhouseBtn text='Follow' variant='primary-small' onClick={handleFollowUser} />
            }
        </>
    )
}

export default ProfileFollowBtn
