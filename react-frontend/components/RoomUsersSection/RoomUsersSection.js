import { useContext, useState, useEffect } from 'react'
import {
    Box
} from '@chakra-ui/react'

import AuthContext from '../../context/AuthContext'
import RoomUserList from '../RoomUserList/RoomUserList'

function RoomUsersSection() {
    // const speakers = ['user1','user1','user1','user1','user1','user1','user1']
    // const listeners = ['user1','user1','user1','user1','user1','user1','user1','user1','user1','user1','user1','user1','user1']

    const { roomData } = useContext(AuthContext)
    const [speakers, setSpeakers] = useState([])
    const [listeners, setListeners] = useState([])

    useEffect(() => {
        if (roomData) {
            setSpeakers(roomData.users)
            setListeners(roomData.users)
        }
    }, [roomData])

    return (
        <Box>
            <RoomUserList text='Speakers' users={speakers}/>
            <RoomUserList text='Listeners' users={listeners} />
        </Box>
    )
}

export default RoomUsersSection
