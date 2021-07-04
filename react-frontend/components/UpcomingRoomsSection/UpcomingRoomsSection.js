import {
    Box
} from '@chakra-ui/react'

import UpcomingRoomsList from '../UpcomingRoomsList/UpcomingRoomsList'
import BoldText from '../BoldText/BoldText'

function UpcomingRoomsSection() {

    const handleLoadUpcomingRooms = () => {
        console.log('load list of upcoming rooms!')
    }

    return (
        <Box 
            rounded='lg' 
            bg='clubhousegrey.200'
        >
            <Box 
                roundedTop='lg' 
                borderWidth='1px'
                borderColor='clubhousegrey.400' 
                p='20px'
            >
                <BoldText text='Upcoming rooms' />
            </Box>
            <UpcomingRoomsList />
            <Box 
                roundedBottom='lg' 
                borderBottomWidth='1px' 
                borderColor='clubhousegrey.400' 
                px='20px' 
                py='15px' 
                bg='clubhousegrey.400'
                transition="0.2s"
                _hover={{
                    bg: 'clubhousegrey.600',
                    borderColor: 'clubhousegrey.600',
                    cursor: 'pointer'
                }}
                onClick={handleLoadUpcomingRooms}
            >
                <BoldText text='Explore more rooms' fontSize='md'/>
            </Box>
        </Box>
    )
}

export default UpcomingRoomsSection
