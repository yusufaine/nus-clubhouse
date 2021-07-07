import {
    Stack
} from '@chakra-ui/react'

import UpcomingRoomsSection from '../UpcomingRoomsSection/UpcomingRoomsSection'
import UserProfileSection from '../UserProfileSection/UserProfileSection'

function ProfileUpcomingRoomsSection({...props}) {
    return (
        <Stack 
            direction='column' 
            spacing='30px'
            mr={0}
            w='525px'
            {...props}
        >
            <UserProfileSection />
            <UpcomingRoomsSection />
        </Stack>
    )
}

export default ProfileUpcomingRoomsSection
