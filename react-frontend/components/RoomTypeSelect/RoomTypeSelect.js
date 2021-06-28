import {
    Select
} from '@chakra-ui/react'

function RoomTypeSelect({ field, valid, ...props }) {
    return (
        <Select 
            {...field}
            id='type'
            colorScheme='clubhousegrey'
            bg='clubhousegrey.400'
            focusBorderColor='clubhouseorange.500'
            rounded='lg'
            {...props}
        >
            <option value='Public'>Public</option>
            <option value='Private'>Private</option>
        </Select>
    )
}

export default RoomTypeSelect
