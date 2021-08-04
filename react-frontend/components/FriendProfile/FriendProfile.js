import { 
    Box,
    HStack,
    LinkBox,
    LinkOverlay
} from '@chakra-ui/react'
import NextLink from 'next/link'

import UserNameText from '../UserNameText/UserNameText'
import UserUsernameText from '../UserUsernameText/UserUsernameText'
import FriendProfileAvatar from '../FriendProfileAvatar/FriendProfileAvatar'

function FriendProfile({ user }) {
    return (
        <LinkBox>
            <NextLink href={`/user/${user.id}`} passHref>
                <LinkOverlay>
                    <HStack direction='row' spacing={4}>
                        <FriendProfileAvatar />
                        <Box>
                            <UserNameText text={user.name}/>
                            <UserUsernameText text={user.username}/>
                        </Box>
                    </HStack>
                </LinkOverlay>
            </NextLink>
        </LinkBox>
    )
}

export default FriendProfile
