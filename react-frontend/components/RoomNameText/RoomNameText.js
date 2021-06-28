import {
    Text
} from '@chakra-ui/react'

function RoomNameText({ text, ...props }) {
    return (
        <Text fontWeight='bold' fontSize='md' textColor='clubhouseblue.900' {...props}>
            {text}
        </Text>
    )
}

export default RoomNameText
