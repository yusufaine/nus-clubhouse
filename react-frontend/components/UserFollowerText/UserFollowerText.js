import {
    Stack,
    Text
} from '@chakra-ui/react'

function UserFollowerText({ numFollowers }) {
    return (
        <Stack direction='row' spacing={1}>
            <Text fontWeight='extrabold' fontSize='14px'>{numFollowers}</Text>
            <Text fontSize='14px'>followers</Text>
        </Stack>
    )
}

export default UserFollowerText
