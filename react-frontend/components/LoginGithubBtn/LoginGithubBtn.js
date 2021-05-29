import { Button } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

function LoginGithubBtn({ ...props }) {
    return (
        <Button leftIcon={<FaGithub />} size='md' {...props} iconSpacing={4}>
            Login with Github
        </Button>
    )
}

export default LoginGithubBtn
