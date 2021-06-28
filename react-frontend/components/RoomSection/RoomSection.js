import { useContext, useState, useEffect } from 'react'
import {
    Box
} from '@chakra-ui/react'

import RoomNameSection from '../RoomNameSection/RoomNameSection'
import RoomUsersSection from '../RoomUsersSection/RoomUsersSection'
import RoomButtonsSection from '../RoomButtonsSection/RoomButtonsSection'
import AuthContext from '../../context/AuthContext'

function RoomSection() {
    const { roomData } = useContext(AuthContext)
    const [roomName, setRoomName] = useState('')
    const [roomCreatorName, setRoomCreatorName] = useState('')

    useEffect(() => {
        if (roomData && roomData.creator) {
            setRoomName(roomData.name)
            setRoomCreatorName(roomData.creator.name)
        }
    }, [roomData])

    return (
        <Box 
            w='100%'
            rounded='lg' 
            borderWidth='1px'
            borderColor='clubhousegrey.400'
            bg='clubhousegrey.200'
        >
            <RoomNameSection 
                roomName={roomName} 
                creatorName={roomCreatorName}
            />
            <RoomUsersSection />
            <RoomButtonsSection />
        </Box>
    )
}

export default RoomSection
