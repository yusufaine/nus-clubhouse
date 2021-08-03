import {
    Stack
} from '@chakra-ui/react'

import FriendProfile from '../FriendProfile/FriendProfile'

function FriendProfileList({ users }) {
    return (
        <Stack direction='column' spacing={6} mt={12}>
            {users.map((user,i) => (
                <FriendProfile user={user} key={i}/>
            ))}
        </Stack>
    )
}

export default FriendProfileList
