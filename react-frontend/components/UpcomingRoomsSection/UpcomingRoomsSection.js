import {
    Box
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

import UpcomingRoomsList from '../UpcomingRoomsList/UpcomingRoomsList'
import BoldText from '../BoldText/BoldText'

function UpcomingRoomsSection({ scheduled_rooms }) {
    const router = useRouter()
    const handleLoadUpcomingRooms = () => {
        router.push('/scheduled')
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
            <UpcomingRoomsList rooms={scheduled_rooms}/>
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
