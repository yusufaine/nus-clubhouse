import {
    Flex, 
    IconButton,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import NextImage from 'next/image'

function Navbar() {
    return (
        <>
            <Flex px={4} py={4} justifyContent={'center'} mb={4}>
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


// MYPETS

// import {
//     Box,
//     Divider,
//     Flex,
//     Text,
//     IconButton,
//     Button,
//     ButtonGroup,
//     Stack,
//     Collapse,
//     Icon,
//     Link,
//     Popover,
//     PopoverTrigger,
//     PopoverContent,
//     useColorModeValue,
//     useBreakpointValue,
//     useDisclosure,
// } from '@chakra-ui/react';
// import {
//     HamburgerIcon,
//     CloseIcon,
//     ChevronDownIcon,
//     ChevronRightIcon,
// } from '@chakra-ui/icons';
// import NextLink from 'next/link'

// import LoginModalBtn from '../LoginModalBtn/LoginModalBtn';
// import SignupModalBtn from '../SignupModalBtn/SignupModalBtn';
// import SearchbarGroup from '../SearchbarGroup/SearchbarGroup'
// import NavbarCartModalBtn from '../NavbarCartModalBtn/NavbarCartModalBtn';
// import NavbarUserIcon from '../NavbarUserIcon/NavbarUserIcon';
// import NavbarUserModalBtn from '../NavbarUserModalBtn/NavbarUserModalBtn';

// export default function Navbar({ user=true }) {
//     const { isOpen, onToggle } = useDisclosure();

//     return (
//         <Box>
//             <Flex
//                 bg='white'
//                 color='gray.600'
//                 py={{ base: 4 }}
//                 px={{ base: 2 }}
//                 borderBottom={1}
//                 borderStyle={'solid'}
//                 borderColor='gray.200'
//                 align={'center'}
//                 justifyContent='center'
//             >
//                 <Flex
//                     alignItems={'center'} 
//                     justifyContent={'space-between'} 
//                     maxW={{ lg: '1200px' }}
//                     w='100%'
//                     px={4}
//                 >
//                     <Flex
//                         flex={{ base: 1, lg: 'auto' }}
//                         display={{ base: 'flex', lg: 'none' }}
//                     >
//                         <IconButton
//                             onClick={onToggle}
//                             icon={
//                                 isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
//                             }
//                             variant={'ghost'}
//                             aria-label={'Toggle Navigation'}
//                         />
//                     </Flex>
                    
//                     <Box display={{ base: 'none', lg: 'block'}}>
//                         <NextLink 
//                             href='/' 
//                             as='/' 
//                             passHref
//                         >
//                             <a>
//                                 <img src='/cropped-logo.svg' width='125' height='52' />
//                             </a>
//                         </NextLink>
//                     </Box>

//                     <SearchbarGroup display={{ base: 'none', lg: 'inherit' }}/>

//                     { user ? ( 
//                     <ButtonGroup alignItems='center' spacing={6}>
//                         <NavbarCartModalBtn />
//                         <NavbarUserIcon />
//                     </ButtonGroup>     
//                     ) : (
//                     <ButtonGroup spacing={4}>
//                         <LoginModalBtn />
//                         <SignupModalBtn />
//                     </ButtonGroup>
//                     )}
//                 </Flex>
//             </Flex>

//             <Collapse in={isOpen} animateOpacity>
//                 <MobileNav />
//             </Collapse>
//         </Box>
//     );
// }

// const MobileNav = () => {
//     return (
//         <Box
//             bg='white'
//             p={4}
//             display={{ base: 'inherit', lg: 'none' }}
//         >
//             <Stack spacing={4}>
//                 <SearchbarGroup display={{ base: 'inherit', lg: 'none' }}/>
//                 <Divider/>
//                 <NavbarUserModalBtn mode='mobile' />
//                 <Box px={2}>
//                     Past orders
//                 </Box>
//                 <Divider/>
//                 <Box px={2}>
//                     Log out 
//                 </Box>
//             </Stack>
//         </Box>
//     );
// };