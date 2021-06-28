import { 
    Box,
    Link,
    Text,
    Stack
} from '@chakra-ui/react'
const axios = require('axios').default

import LoginRegisterForm from '../LoginRegisterForm/LoginRegisterForm'
import BoldText from '../BoldText/BoldText'
import LoginGithubBtn from '../LoginGithubBtn/LoginGithubBtn'
import LoginDiscordBtn from '../LoginDiscordBtn/LoginDiscordBtn'
import { API_URL } from '../../utils/utils'

function LoginBox() {

    const loginGithub = () => {
        // call API to log into github
        axios
        .get(`${API_URL}/auth/github`)
        .then((response) => {
            console.log('response from api auth: ', response)
        })
    }

    const loginGithubUrl = `${API_URL}/auth/github`
    const loginDiscordUrl = `${API_URL}/auth/discord`

    return (
        <Stack direction='column' px='40px' py='36px' bgColor='clubhousegrey.200' w='400px' rounded='lg' spacing={6}>
            <Box>
                <BoldText text='Welcome' />
                <Text mt={2}>
                    By logging in you accept our <Link>Privacy Policy</Link> and <Link>Terms of Service</Link>
                </Text>
            </Box>
            <LoginRegisterForm />
        </Stack>
    )
}

export default LoginBox
