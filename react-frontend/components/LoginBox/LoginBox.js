import { 
    Link,
    Text,
    Stack
} from '@chakra-ui/react'

import BoldText from '../BoldText/BoldText'
import LoginGithubBtn from '../LoginGithubBtn/LoginGithubBtn'
import LoginDiscordBtn from '../LoginDiscordBtn/LoginDiscordBtn'

function LoginBox() {

    const loginGithub = () => {
        // call API to log into github
    }

    return (
        <Stack direction='column' px='40px' py='44px' bgColor='clubhousegrey.300' w='400px' rounded='lg'>
            <BoldText text='Welcome' />
            <Text mt={4}>
                By logging in you accept our <Link>Privacy Policy</Link> and <Link>Terms of Service</Link>
            </Text>
            <Stack spacing='30px' >
                {/* <LoginNUSBtn /> */}
                <LoginGithubBtn mt={10} />
                <LoginDiscordBtn />
            </Stack>
        </Stack>
    )
}

export default LoginBox
