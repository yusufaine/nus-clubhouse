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
        if (roomData.users) {
            const speakers = []
            const listeners = []
            roomData.users.map(user => {
                if (user.isSpeaker) {
                    speakers.push(user)
                } else {
                    listeners.push(user)
                }
            })
            setSpeakers(speakers)
            setListeners(listeners)
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
