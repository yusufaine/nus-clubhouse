import {
    Avatar,
    Text,
    VStack
} from '@chakra-ui/react'

function RoomUserAvatar({ username }) {
    return (
        <VStack>
            <Avatar size='lg'/>
            <Text fontSize='sm'>{username}</Text>
        </VStack>
    )
}

export default RoomUserAvatar
