import {
    Box, 
    Stack
} from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'

import ClubhouseBtn from '../ClubhouseBtn/ClubhouseBtn'

function ProfileHeaderSection() {
    return (
        <Stack direction='row' justify='space-between' p='20px' bg='clubhousegrey.200'>
            <Stack direction='row' spacing={4} mb={4}>
                <UserProfileAvatar />
                <Box>
                    <UserNameText text={name}/>
                    <UserUsernameText text={username}/>
                </Box>
            </Stack>
            <ClubhouseBtn text='Edit Profile' leftIcon={<EditIcon boxSize='12px' />} />
        </Stack>
    )
}

export default ProfileHeaderSection
