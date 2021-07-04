import { useEffect, useState, useContext } from 'react'
import Head from 'next/head'
import { 
  Container, 
  Stack,
  useToast
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

import Navbar from '../../../components/Navbar/Navbar'
import FriendsList from '../../../components/FriendsList/FriendsList'
import RoomSection from '../../../components/RoomSection/RoomSection'
import ProfileUpcomingRoomsSection from '../../../components/ProfileUpcomingRoomsSection/ProfileUpcomingRoomsSection'
import AuthContext from '../../../context/AuthContext'

function index() {
    const { user, fetchRoom } = useContext(AuthContext)
    const [roomPageData, setRoomPageData] = useState(null)
    const router = useRouter()
    const toast = useToast()
    
    useEffect(() => {
        if (router.query.id) {
            const roomId = router.query.id
            console.log('room id: ', roomId)
            fetchRoom(roomId, toast, roomPageData, setRoomPageData)
        }
    }, [router.query.id])
    
    return (
        <>
            <Head>
                <title>NUS Clubhouse Room</title>
                <meta name="description" content="NUS Clubhouse voice room" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <Container maxW='1320px' w='100%' centerContent p={0} mb={6}>
                <Stack direction='row' w='100%' spacing='60px'>
                    <FriendsList friends={user.friends}/>
                    <RoomSection />
                    <ProfileUpcomingRoomsSection user={user} />
                </Stack>
            </Container>
        </> 
    )
}

export default index
