import {
    Avatar
} from '@chakra-ui/react'

function UserProfileAvatar({ name, src, ...props }) {
    return (
        <Avatar size='lg' name={name} src={src} {...props}/>
    )
}

export default UserProfileAvatar
