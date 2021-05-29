import { Button } from '@chakra-ui/react'
import { FaDiscord } from 'react-icons/fa'

function LoginDiscordBtn({ ...props }) {
    return (
        <Button leftIcon={<FaDiscord />} size='md' {...props} iconSpacing={4}>
            Login with Discord
        </Button>
    )
}

export default LoginDiscordBtn
