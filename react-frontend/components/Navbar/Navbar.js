import {
    Flex, 
    IconButton,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import NextImage from 'next/image'

function Navbar() {
    return (
        <>
            <Flex bgColor='clubhousegrey.200' px={4} py={4} justifyContent={'center'} >
                <Flex h={20} alignItems={'center'} justifyContent={'space-between'} w="1200px" px={4}>
                    <NextLink 
                        href='/' 
                        as='/' 
                        passHref
                    >
                        <a>
                            <NextImage src='/vercel.svg' width='283' height='64'/>
                        </a>
                    </NextLink>
                    {/* <Flex alignItems={'center'}> */}
                        {/* if logged in, show past orders, cart + user icon */}
                        {/* user ? ( 
                            <ButtonGroup alignItems='center' spacing={6}>
                                <NavbarCartModalBtn />
                                <NavbarUserIcon />
                            </ButtonGroup>     
                        ) : (
                            // else, show login/sign up button group 
                            <ButtonGroup spacing={4}>
                                <LoginModalBtn />
                                <SignupModalBtn />
                            </ButtonGroup>
                        )*/}
                    {/* </Flex> */}
                </Flex>

                {/* {isOpen ? (
                    <Box pb={4}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link,i) => (
                                <NavLink key={i}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null} */}
            </Flex>
        </>
    )
}

export default Navbar
