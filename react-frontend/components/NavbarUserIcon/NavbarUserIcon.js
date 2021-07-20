import { useContext } from 'react'
import { useRouter } from 'next/router'
import { 
    Box,
    Menu, 
    MenuButton, 
    MenuList, 
    MenuDivider, 
    MenuItem, 
    Button, 
    Avatar, 
    useDisclosure 
} from '@chakra-ui/react'

import AuthContext from '../../context/AuthContext'


function NavbarUserIcon() {
    // const { logoutUser } = useContext(AuthContext)
    const router = useRouter()

    const handleProfile = () => {
        router.push('/profile')
    }

    return (
        <Box display={{base: 'none', lg: 'block'}}>
            <Menu>
                <MenuButton
                    as={Avatar}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    boxSize={{ base: '2.25em' }}
                />
                <MenuList zIndex='popover'>
                    <MenuItem onClick={handleProfile}>Profile</MenuItem>
                    <MenuDivider />
                    <MenuItem 
                        // onClick={logoutUser}
                    >Log out</MenuItem>
                </MenuList>
            </Menu>
        </Box>
    )
}

export default NavbarUserIcon
