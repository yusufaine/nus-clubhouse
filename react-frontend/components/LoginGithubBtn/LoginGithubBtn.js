import { Button } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'
import NextLink from 'next/link'

function LoginGithubBtn({ href, onClick, ...props }) {
    return (
        <NextLink href={href}>
            <Button leftIcon={<FaGithub />} size='md' {...props} iconSpacing={4}>
                Login with Github
            </Button>
        </NextLink>
    )
}

export default LoginGithubBtn
