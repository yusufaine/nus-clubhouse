import {
    Flex, 
    IconButton,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import NextImage from 'next/image'

import NavbarUserIcon from '../NavbarUserIcon/NavbarUserIcon'

function Navbar() {
    return (
        <>
            <Flex px={4} py={4} justifyContent={'center'}>
                <Flex h={20} alignItems={'center'} justifyContent={'space-between'} w="1320px">
                    <NextLink 
                        href='/' 
                        as='/' 
                        passHref
                    >
                        <a>
                            <NextImage src='/logo-full.svg' width='192' height='32'/>
                        </a>
                    </NextLink>
                    <NavbarUserIcon />
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