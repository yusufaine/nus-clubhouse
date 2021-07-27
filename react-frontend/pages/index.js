import { useEffect, useState, useContext } from 'react'
import Head from 'next/head'
import {
    Center,
    Container,
    Stack
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

import Navbar from '../components/Navbar/Navbar'
import FriendsList from '../components/FriendsList/FriendsList'
import RoomListFeed from '../components/RoomListFeed/RoomListFeed'
import ProfileUpcomingRoomsSection from '../components/ProfileUpcomingRoomsSection/ProfileUpcomingRoomsSection'
import AuthContext from '../context/AuthContext'

export default function Home() {
    const { user, fetchLiveRooms, fetchScheduledRooms } = useContext(AuthContext)
    const router = useRouter()

    const [rooms, setRooms] = useState([])
    const [scheduledRooms, setScheduledRooms] = useState([])
    const [userName, setUserName] = useState('')
    const [userUsername, setUserUsername] = useState('')
    const [userBio, setUserBio] = useState('')
    const [userProfileImgUrl, setUserProfileImgUrl] = useState('')
    const [usersFollowing, setUsersFollowing] = useState([])
    const [numFollowers, setNumFollowers] = useState('')
    const [numFollowing, setNumFollowing] = useState('')
    
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
            fetchScheduledRooms().then(rooms => {
                console.log('scheduled rooms value: ', rooms)
                setScheduledRooms(rooms)
            })
            setUserUsername(user.username)
            setUserName(user.name)
            setUserBio(user.bio)
            setUserProfileImgUrl(user.profileImgUrl)
            setUsersFollowing(user.following)
            setNumFollowers(user.followers.length)
            setNumFollowing(user.following.length)
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
                    <FriendsList users={usersFollowing}/>
                    <RoomListFeed title='Your feed' rooms={rooms} isScheduled={false}/>
                    <ProfileUpcomingRoomsSection 
                        name={userName} 
                        username={userUsername}
                        numFollowers={numFollowers} 
                        numFollowing={numFollowing}
                        scheduledRooms={scheduledRooms}
                    />
                </Stack>
            </Container>
        </>
    )
}





