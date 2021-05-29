import { 
    Text 
} from '@chakra-ui/react'

function BoldText({ text }) {
    return (
        <Text fontWeight='extrabold' fontSize='2xl'>
            {text}
        </Text>
    )
}

export default BoldText
