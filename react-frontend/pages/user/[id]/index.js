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

function userPage({ userPageData }) {
    const { user, fetchScheduledRooms } = useContext(AuthContext)

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
            fetchScheduledRooms().then(rooms => {
                console.log('scheduled rooms value: ', rooms)
                setScheduledRooms(rooms)
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
                        name={userPageData.name} 
                        username={userPageData.username}
                        bio={userPageData.bio}
                        profileImgUrl={userPageData.profileImgUrl}
                        numFollowers={userPageData.followers.length} 
                        numFollowing={userPageData.following.length}
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

export default userPage

export async function getServerSideProps({ params: { id } }) {
    const { fetchUser } = useContext(AuthContext)
    const userData = await fetchUser(id)

    // Return as props
    return {
        props: {
            user: userData
        }
    }
}
