import {
    Stack
} from '@chakra-ui/react'

import UpcomingRoomsSection from '../UpcomingRoomsSection/UpcomingRoomsSection'
import UserProfileSection from '../UserProfileSection/UserProfileSection'

function ProfileUpcomingRoomsSection({ name, username, numFollowers, numFollowing, scheduledRooms, ...props}) {
    return (
        <Stack 
            direction='column' 
            spacing='30px'
            mr={0}
            w='525px'
            {...props}
        >
            <UserProfileSection 
                name={name} 
                username={username} 
                numFollowers={numFollowers} 
                numFollowing={numFollowing}
            />
            <UpcomingRoomsSection scheduledRooms={scheduledRooms}/>
        </Stack>
    )
}

export default ProfileUpcomingRoomsSection
