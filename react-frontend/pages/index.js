import { useEffect, useState, useContext } from 'react'
import Head from 'next/head'
import {
    Center,
    Container,
    Stack
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

import LoginBox from '../components/LoginBox/LoginBox'
import Navbar from '../components/Navbar/Navbar'
import FriendsList from '../components/FriendsList/FriendsList'
import RoomListFeed from '../components/RoomListFeed/RoomListFeed'
import ProfileUpcomingRoomsSection from '../components/ProfileUpcomingRoomsSection/ProfileUpcomingRoomsSection'
import AuthContext from '../context/AuthContext'

export default function Home() {
    const { user, fetchLiveRooms } = useContext(AuthContext)
    const [rooms, setRooms] = useState([])
    const router = useRouter()
    
    useEffect(() => {
        if (!user) {
            console.log('user not logged in')
            router.push('/login')
        } else {
            fetchLiveRooms().then(rooms => {
                console.log('rooms value: ', rooms)
                const liveRooms = rooms.filter(room => { return room.isLive })
                setRooms(liveRooms)
            })
        }
    }, [user])

    return (user && 
        <>
            <Head>
                <title>NUS Clubhouse</title>
                <meta name="description" content="NUS Voice Rooms" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <Container maxW='1320px' w='100%' mb={6} centerContent p={0}>
                <Stack direction='row' w='100%' spacing='60px'>
                    <FriendsList />
                    <RoomListFeed rooms={rooms}/>
                    <ProfileUpcomingRoomsSection />
                </Stack>
            </Container>
        </>
    )
}





