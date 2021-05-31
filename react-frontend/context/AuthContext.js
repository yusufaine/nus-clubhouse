import { createContext, useState, useEffect } from 'react'

import { useRouter } from 'next/router'
import { API_URL } from '../utils/utils'

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
    const router = useRouter()

    /**
     * Login user via 3rd party provider
     * @param {any} token obtained by provider to make authorized requests to get user info from provider (username, email, etc)
     */
    const loginUser = async (id) => {
        try {
            const response = await fetch(`${API_URL}/api/me?id=${id}`, {
                headers: {
                    "content-type": "application/json",
                },
                credentials: "include"
            })
            
            const data = await response.json()
            if(!data.username) {
                console.log("Login failed. Please try again. ", data)
            } else {
                const username = data.username
                console.log('Successfully logged in ', username)
                setUser(data)
            }
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
        const user = await callAPI('/api/me', 'GET')
        if (user.email) {
            console.log('user logged in: ', user)
            setUser(user)
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
            logoutUser, 
            loginUser
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext