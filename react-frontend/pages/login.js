import { useEffect, useState, useContext } from 'react'
import Head from 'next/head'
import {
  Container,
  Box,
  Center,
  Text
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

import LoginBox from '../components/LoginBox/LoginBox'
import AuthContext from '../context/AuthContext'

export default function Login() {
  const { user } = useContext(AuthContext)
  const router = useRouter()

  if (user) {
    router.push('/')
  }

  return (
    <>
      <Head>
        <title>NUS Clubhouse Login</title>
        <meta name="description" content="Login to NUS Clubhouse" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW='1320px' h='100vh' centerContent>
        <Center h='100%'>
          {user ? <Text>Welcome {user.username} </Text> : <LoginBox />}
        </Center>
      </Container>
    </>
  )
}
