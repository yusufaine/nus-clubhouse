import {
    Box, 
    Stack
} from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'

import ClubhouseBtn from '../ClubhouseBtn/ClubhouseBtn'
import UserNameText from '../UserNameText/UserNameText'
import UserUsernameText from '../UserUsernameText/UserUsernameText'
import UserProfileAvatar from '../UserProfileAvatar/UserProfileAvatar'

function ProfileHeaderSection({ name, username }) {
    return (
        <Stack 
            rounded='8px' 
            direction='row' 
            justify='space-between' 
            p='20px' 
            bg='clubhousegrey.200'
        >
            <Box w='red.100' h='100px'></Box>
            <Stack direction='row' spacing={4} mb={4}>
                <UserProfileAvatar />
                <Box>
                    <UserNameText text={name}/>
                    <UserUsernameText text={username}/>
                </Box>
            </Stack>
            <ClubhouseBtn text='Edit Profile' variant='secondary' leftIcon={<EditIcon boxSize='12px' />} />
        </Stack>
    )
}

export default ProfileHeaderSection
