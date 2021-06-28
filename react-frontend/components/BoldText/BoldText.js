import { 
    Text 
} from '@chakra-ui/react'

function BoldText({ text, fontSize='xl', ...props }) {
    return (
        <Text fontWeight='extrabold' fontSize={fontSize} textColor='clubhousegrey.900' {...props}>
            {text}
        </Text>
    )
}

export default BoldText
