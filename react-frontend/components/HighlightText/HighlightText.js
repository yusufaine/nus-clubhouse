import {
    Text
} from '@chakra-ui/react'

function HighlightText({ text, ...props }) {
    return (
        <Text fontWeight='medium' fontSize='xs' textTransform='uppercase' textColor='clubhouseorange.500' {...props}>
            {text}
        </Text>
    )
}

export default HighlightText
