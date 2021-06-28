import { 
    Text
} from '@chakra-ui/react'

function UserNameText({ text, ...props }) {
    return (
        <Text fontWeight='extrabold' fontSize='14px' textColor='clubhousegrey.900' {...props}>
            {text}
        </Text>
    )
}

export default UserNameText
