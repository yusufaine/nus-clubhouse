import { useEffect, useState, useContext, useRef } from 'react'
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
import VoiceContext from '../../../context/VoiceContext'
import { VoiceProvider } from '../../../context/VoiceContext'

function index() {
    const { user, fetchRoom, fetchLiveRooms } = useContext(AuthContext)
    const { joinRoomVoiceChannel } = useContext(VoiceContext)
    const router = useRouter()
    const toast = useToast()
    const audioRef = useRef()

    const [scheduledRooms, setScheduledRooms] = useState([])
    const [userName, setUserName] = useState('')
    const [userUsername, setUserUsername] = useState('')
    const [userBio, setUserBio] = useState('')
    const [userProfileImgUrl, setUserProfileImgUrl] = useState('')
    const [usersFollowing, setUsersFollowing] = useState([])
    const [numFollowers, setNumFollowers] = useState('')
    const [numFollowing, setNumFollowing] = useState('')

    useEffect(() => {
        if (user) {
            fetchLiveRooms().then(rooms => {
                const scheduledRooms = rooms.filter(room => { return room.isScheduled })
                console.log('scheduled rooms value: ', scheduledRooms)
                setScheduledRooms(scheduledRooms)
            })
            setUserUsername(user.username)
            setUserName(user.name)
            setUserBio(user.bio)
            setUserProfileImgUrl(user.profileImgUrl)
            setNumFollowers(user.followers.length)
            setNumFollowing(user.following.length)
            setUsersFollowing(user.following)
        }
    }, [])
    
    useEffect(() => {
        if (router.query.id) {
            const roomId = router.query.id
            console.log('room id: ', roomId)
            fetchRoom(roomId, toast)
            joinRoomVoiceChannel(user.name, roomId, audioRef)
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
                    <FriendsList users={usersFollowing}/>
                    <RoomSection />
                    <ProfileUpcomingRoomsSection
                        name={userName} 
                        username={userUsername}
                        numFollowers={numFollowers} 
                        numFollowing={numFollowing}
                        scheduledRooms={scheduledRooms}
                    />
                </Stack>
                <div ref={audioRef}></div>
            </Container>
        </> 
    )
}

export default index
