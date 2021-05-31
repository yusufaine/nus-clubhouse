import { Button } from '@chakra-ui/react'
import { FaDiscord } from 'react-icons/fa'
import NextLink from 'next/link'

function LoginDiscordBtn({ href, ...props }) {
    return (
        <NextLink href={href}>
             <Button leftIcon={<FaDiscord />} size='md' {...props} iconSpacing={4}>
                Login with Discord
            </Button>
        </NextLink>
    )
}

export default LoginDiscordBtn
