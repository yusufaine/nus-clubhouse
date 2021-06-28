import { 
    Stack,
    VStack,
    Spacer
} from '@chakra-ui/react'

import RoomCard from '../RoomCard/RoomCard'
import NewRoomModalBtn from '../NewRoomModalBtn/NewRoomModalBtn'
import BoldText from '../BoldText/BoldText'

function RoomListFeed({ rooms=['room1', 'room1', 'room1', 'room1', 'room1'] }) {
    return (
        <VStack w='100%'>
            <Stack direction='row' mb='30px' w='100%'>
                <BoldText text='Your feed'/>
                <Spacer />
                <NewRoomModalBtn />
            </Stack>
            <VStack spacing='20px'>
                {rooms.map((room,i) => (
                    <RoomCard key={i} room={room}/>
                ))}
            </VStack>
        </VStack>
    )
}

export default RoomListFeed
