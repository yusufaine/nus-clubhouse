import { 
    Button
} from '@chakra-ui/react'

function ClubhouseBtn({ text, variant, type, onClick, ...props }) {

    if (variant == 'primary') {
        return (
            <Button 
                variant='solid'
                colorScheme='clubhouseorange'
                size='md'
                fontSize='sm'
                px='40px'
                py='16px'
                type={type}
                onClick={onClick}
                {...props}
            >
                {text}
            </Button>
        )
    } else if (variant == 'secondary') {
        return (
            <Button 
                variant='solid'
                colorScheme='clubhousegrey'
                size='md'
                fontSize='sm'
                px='40px'
                py='16px'
                type={type}
                onClick={onClick}
                {...props}
            >
                {text}
            </Button>
        )
    } else if (variant == 'secondary-small') {
        return (
            <Button 
                variant='solid'
                colorScheme='clubhousegrey'
                textColor='clubhousegrey.900'
                size='sm'
                fontSize='sm'
                rounded='4px'
                type={type}
                onClick={onClick}
                {...props}
            >
                {text}
            </Button>
        )
    } else {
        return (
            <Button 
                variant='link'
                colorScheme='clubhousegrey'
                color='clubhousegrey.800'
                size='md'
                fontSize='sm'
                type={type}
                onClick={onClick}
                {...props}
            >
                {text}
            </Button>
        )
    }
    
}

export default ClubhouseBtn
