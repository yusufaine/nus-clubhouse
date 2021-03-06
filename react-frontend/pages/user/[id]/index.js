import { useEffect, useState, useContext } from 'react'
import Head from 'next/head'
import {
    Center,
    Container,
    Stack
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

import Navbar from '../../../components/Navbar/Navbar'
import FriendsList from '../../../components/FriendsList/FriendsList'
import ProfileUpcomingRoomsSection from '../../../components/ProfileUpcomingRoomsSection/ProfileUpcomingRoomsSection'
import ProfileSection from '../../../components/ProfileSection/ProfileSection'
import AuthContext from '.././../../context/AuthContext'
// import { API_URL } from '../

function index() {
    const { user, fetchScheduledRooms, fetchUser } = useContext(AuthContext)
    const router = useRouter()

    const [userPageData, setUserPageData] = useState(null)
    const [scheduledRooms, setScheduledRooms] = useState([])
    const [userId, setUserId] = useState('')
    const [userName, setUserName] = useState('')
    const [userUsername, setUserUsername] = useState('')
    const [userBio, setUserBio] = useState('')
    const [userProfileImgUrl, setUserProfileImgUrl] = useState('')
    const [usersFollowing, setUsersFollowing] = useState([])
    const [numFollowers, setNumFollowers] = useState('')
    const [numFollowing, setNumFollowing] = useState('')

    const setUserData = (user) => {
        setUserId(user.id)
        setUserUsername(user.username)
        setUserName(user.name)
        setUserBio(user.bio)
        setUserProfileImgUrl(user.profileImgUrl)
        setNumFollowers(user.followers.length)
        setNumFollowing(user.following.length)
        setUsersFollowing(user.following)
    }

    useEffect(() => {
        if (router.query.id) {
            const userId = router.query.id
            console.log('router query data: ', router.query)
            fetchUser(userId).then((userData) => {
                console.log('server side props called! data: ', userData.data)
                setUserPageData(userData.data)
            })  
        }
        
        if (user) {
            fetchScheduledRooms().then(rooms => {
                console.log('scheduled rooms value: ', rooms)
                setScheduledRooms(rooms)
            })
            setUserData(user)
        }
    }, [])

    useEffect(() => {
        if (router.query.id) {
            const userId = router.query.id
            console.log('router query data: ', router.query)
            fetchUser(userId).then((userData) => {
                console.log('server side props called! data: ', userData.data)
                setUserPageData(userData.data)
            })  
        }
    }, [router.query])

    useEffect(() => {
        if (user) {
            setUserData(user)
        }
    }, [user])

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
                        userId={userId}
                        profileId={userPageData && userPageData.id}
                        name={userPageData && userPageData.name} 
                        username={userPageData && userPageData.username}
                        bio={userPageData && userPageData.bio}
                        profileImgUrl={userPageData && userPageData.profileImgUrl}
                        numFollowers={userPageData && userPageData.followers.length} 
                        numFollowing={userPageData && userPageData.following.length}
                        following={usersFollowing}
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

// export async function getServerSideProps({ params: { id } }) {
//     console.log('get server side props id: ', id)
//     const { fetchUser } = useContext(AuthContext)
//     fetchUser(id).then((userData) => {
//         console.log('server side props called! data: ', userData.data)
//         // Return as props
//         return {
//             props: {
//                 userPageData: userData.data
//             }
//         }
//     })
// }

export default index
