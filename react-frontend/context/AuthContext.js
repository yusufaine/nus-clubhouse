import { createContext, useState, useEffect } from 'react'
import { Socket } from 'phoenix'
import { useRouter } from 'next/router'
import { API_URL, SOCKET_URL } from '../utils/utils'

const AuthContext = createContext()

export const callAPI = async (path, method, body) => {
    console.log('fetching...')
    const response = await fetch(`${API_URL}${path}`, {
        method,
        headers: {
            "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(body)
    })
    const data = await response.json()
    return data
}

export const AuthProvider = (props) => {
    const [user, setUser] = useState('')
    const [roomData, setRoomData] = useState({})
    const router = useRouter()

    const successToast = (text, subtext="", toast) => {
        return toast({
            title: text,
            description: subtext,
            status: 'success',
            duration: 3000,
            isClosable: true,
        })
    }

    const errorToast = (text, subtext="", toast) => {
        return toast({
            title: text,
            description: subtext,
            status: 'error',
            duration: 3000,
            isClosable: true,
        })
    }

    const fetchRoom = async (roomId) => {
        // const room = await joinRoom(roomId)
        console.log('joinin room channel...')
        const socket = new Socket(SOCKET_URL)

        socket.connect()
        console.log(socket)

        const channel = socket.channel(`room:${roomId}`)
        console.log(channel)
        channel.join()
        .receive('ok', ({id, room, pid}) => {
            console.log('room id: ', id)
            console.log('room data: ', room)
            setRoomData(room)
            console.log('room pid: ', pid)
        })
        .receive('error', reason => {
            console.error(reason)
        })

        console.log(channel)

        channel.on('msg', ({msg}) => {
            console.log('msg', msg)
        })

        channel.on('room_update', ({ new_user }) => {
            console.log('room_update, new user: ',  new_user)
        })

        return () => {
            channel.leave()
            socket.disconnect()
        }
    }

    const registerUser = async (values, toast, actions) => {
        try {
            actions.setSubmitting(true)
            const body =  {
                credentials: {
                    username: values.signup_username,
                    email: values.signup_email,
                    password: values.signup_password,
                }
            }
            const data = await callAPI('/auth/register', 'POST', body)
            
            if(!data.data) {
                console.log("Registration failed. Please try again. ", data)
                errorToast("Failed to register", "", toast)
            } else {
                successToast("Successfully registerd account", "Check your NUS email & confirm your account before logging in!", toast)
                setUser(data.data)
            }
            actions.setSubmitting(false)

        } catch (err) {
            console.error(err)
        }
    }

    /**
     * Login user via 3rd party provider
     * @param {any} token obtained by provider to make authorized requests to get user info from provider (username, email, etc)
     */
    const loginUser = async (values, toast, actions) => {
        try {
            actions.setSubmitting(true)
            const body =  {
                credentials: values
            }
            const data = await callAPI('/auth/login', 'POST', body)
            
            if(data.data) {
                const username = data.data.username
                console.log('Successfully logged in ', username)
                successToast("Successfully logged in", "", toast)
                setUser(data.data)
            } else {
                console.log("Login failed. Please try again.", data)
                errorToast("Failed to log in", "Check your email (if you havent confirmed your account) or contact admin!", toast)
            }
            actions.setSubmitting(false)

        } catch (err) {
            console.error(err)
        }
    }

    /**
     * Logs user out by setting user to null
     */
    const logoutUser = async () => {

    }

    const checkUserLoggedIn = async () => {
        console.log('checking if user logged in.....')
        const data = await callAPI('/auth/me', 'GET')
        if (data.data) {
            console.log('user logged in: ', data.data)
            setUser(data.data)
        } else {
            setUser(null)
        }
    }

    useEffect(() => {
        checkUserLoggedIn()
    }, [])

    return (
        <AuthContext.Provider value={{ 
            user,
            roomData,
            registerUser, 
            loginUser,
            logoutUser,
            fetchRoom
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext