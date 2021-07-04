import {   
    Input
} from '@chakra-ui/react'

function ClubhouseInput({ ...props }) {
    return (
        <Input 
            {...props} 
            focusBorderColor='clubhouseorange.500' 
            backgroundColor='clubhousegrey.400' 
            _hover={{
                borderColor: 'clubhousegrey.600'
            }}
            _placeholder={{ 
                textColor: 'clubhousegrey.600' 
            }}
        />
    )
}

export default ClubhouseInput
