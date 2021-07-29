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
import ProfileUpcomingRoomsSection from '../components/ProfileUpcomingRoomsSection/ProfileUpcomingRoomsSection'
import ProfileSection from '../components/ProfileSection/ProfileSection'
import AuthContext from '../context/AuthContext'

function profile() {
    const { user, fetchLiveRooms } = useContext(AuthContext)

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

    // useEffect(() => {
    //     if (user) {
    //         console.log('user value changed: ', user)
    //         setUserUsername(user.username)
    //         setUserName(user.name)
    //         setUserBio(user.bio)
    //         setUserProfileImgUrl(user.profileImgUrl)
    //     }
    // }, [user])

    return (
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
                    <ProfileSection 
                        name={userName} 
                        username={userUsername}
                        bio={userBio}
                        profileImgUrl={userProfileImgUrl}
                        numFollowers={numFollowers} 
                        numFollowing={numFollowing}
                    />
                    <ProfileUpcomingRoomsSection
                        name={userName} 
                        username={userUsername}
                        numFollowers={numFollowers} 
                        numFollowing={numFollowing}
                        scheduledRooms={scheduledRooms.slice(0, 3)}
                    />
                </Stack>
            </Container>
        </>
    )
}

export default profile
