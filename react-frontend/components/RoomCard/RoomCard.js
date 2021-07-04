import {
    Box,
    Stack,
    Spacer
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

import RoomNameText from '../RoomNameText/RoomNameText'

function RoomCard({ room }) {
    const router = useRouter()
    const handleClick = () => {
        router.push(`/room/${room.id}`)
    }
    return (
        <Box 
            rounded='lg' 
            w='100%' 
            h='112px'
            p='20px'
            bg='clubhousegrey.200'
            transition="0.2s"
            _hover={{
                bg: 'clubhousegrey.600',
                cursor: 'pointer'
            }}
            onClick={handleClick}
        >
            <Stack dir='row'>
                <RoomNameText text={room.name} />
                <Spacer />
            </Stack>
        </Box>
    )
}

export default RoomCard
