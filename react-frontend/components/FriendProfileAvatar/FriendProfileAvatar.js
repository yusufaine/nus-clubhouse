import {
    Avatar,
    AvatarBadge
} from '@chakra-ui/react'

function FriendProfileAvatar({ name, status='online'}) {
    return (
        <Avatar name={name} size='md'>
            <AvatarBadge boxSize='1.25em' bg={status == 'online' ? 'green.500' : 'clubhouseorange.600'}/>
        </Avatar>
    )
}

export default FriendProfileAvatar
