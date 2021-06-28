import {
    Input
} from '@chakra-ui/react'

function RoomNameInput({ field, valid, ...props }) {
    return (
        <Input 
            {...field}
            id='name'
            placeholder='Room name' 
            _placeholder={{ color: 'clubhousegrey.600' }}
            colorScheme='clubhousegrey'
            bg='clubhousegrey.400'
            focusBorderColor='clubhouseorange.500'
            rounded='lg'
            {...props}
        />
    )
}

export default RoomNameInput
