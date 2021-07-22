import {
    Textarea
} from '@chakra-ui/react'

function BioInput({ field, valid, placeholder, ...props }) {
    return (
        <Textarea 
            {...field}
            id='bio'
            placeholder={placeholder}
            _placeholder={{ color: 'clubhousegrey.600' }}
            colorScheme='clubhousegrey'
            bg='clubhousegrey.400'
            focusBorderColor='clubhouseorange.500'
            rounded='lg'
            {...props}
        />
    )
}

export default BioInput