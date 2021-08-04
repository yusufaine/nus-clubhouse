import {
    Stack,
    Text
} from '@chakra-ui/react'

function UserFollowingText({ numFollowing }) {
    return (
        <Stack direction='row' spacing={1}>
            <Text fontWeight='extrabold' fontSize='14px'>{numFollowing}</Text>
            <Text fontSize='14px'>following</Text>
        </Stack>
    )
}

export default UserFollowingText
