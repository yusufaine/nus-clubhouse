import {
    Stack
} from '@chakra-ui/react'

import UserFollowerText from '../UserFollowerText/UserFollowerText'
import UserFollowingText from '../UserFollowingText/UserFollowingText'

function UserFollowerFollowingText({ numFollowers=0, numFollowing=0 }) {
    return (
        <Stack direction='row' spacing={5} mb={6}>
            <UserFollowerText numFollowers={numFollowers}/>
            <UserFollowingText numFollowing={numFollowing}/>
        </Stack>
    )
}

export default UserFollowerFollowingText
