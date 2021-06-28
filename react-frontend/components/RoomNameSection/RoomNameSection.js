import {
    Box,
    Stack,
    Text
} from '@chakra-ui/react'

import BoldText from '../BoldText/BoldText'

function RoomNameSection({ roomName='Sample room 1', creatorName='Sample user 1' }) {
    return (
        <Box 
            roundedTop='lg'
            px={5} 
            py={6}
            borderBottomWidth='1px'
            borderColor='clubhousegrey.400'
        >
            <BoldText text={roomName} mb={4}/>
            <Stack direction='row' alignItems='baseline' spacing={1}>
                <Text fontSize='md'>with</Text>
                <BoldText text={creatorName} fontSize='md' />
            </Stack>
        </Box>
    )
}

export default RoomNameSection
