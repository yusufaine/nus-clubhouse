import {
    Stack
} from '@chakra-ui/react'

import UpcomingRoomCard from '../UpcomingRoomCard/UpcomingRoomCard'

function UpcomingRoomsList({ rooms=['room1','room1','room1','room1','room1'] }) {
    return (
        <Stack 
            direction='column'
            borderLeftWidth='1px' 
            borderRightWidth='1px' 
            borderColor='clubhousegrey.400' 
        >
            {rooms.map((room,i) => (
                <UpcomingRoomCard room={room} key={i}/>
            ))}
        </Stack>
    )
}

export default UpcomingRoomsList
