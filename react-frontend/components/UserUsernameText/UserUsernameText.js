import {
    Text
} from '@chakra-ui/react'

function UserUsernameText({ text, ...props }) {
    return (
        <Text fontWeight='normal' fontSize='14px' {...props}>
            @{text}
        </Text>
    )
}

export default UserUsernameText
