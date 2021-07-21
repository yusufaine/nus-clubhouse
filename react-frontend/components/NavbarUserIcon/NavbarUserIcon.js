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
            <Menu placement='bottom-start'>
                <MenuButton
                    as={Avatar}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    boxSize={{ base: '2.25em' }}
                />
                <MenuList 
                    zIndex='popover' 
                    bg='clubhousegrey.200'
                    color='clubhousegrey.800'
                >
                    <MenuItem onClick={handleProfile}>
                        Profile
                    </MenuItem>
                    <MenuDivider bg='clubhousegrey.400'/>
                    <MenuItem 
                        // onClick={logoutUser}
                    >
                        Log out
                    </MenuItem>
                </MenuList>
            </Menu>
        </Box>
    )
}

export default NavbarUserIcon
