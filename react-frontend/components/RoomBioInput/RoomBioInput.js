import {
    Textarea
} from '@chakra-ui/react'

function RoomBioInput({ field, valid, ...props }) {
    return (
        <Textarea 
            {...field}
            id='bio'
            placeholder='Room bio'
            _placeholder={{ color: 'clubhousegrey.600' }}
            colorScheme='clubhousegrey'
            bg='clubhousegrey.400'
            focusBorderColor='clubhouseorange.500'
            rounded='lg'
            {...props}
        />
    )
}

export default RoomBioInput
