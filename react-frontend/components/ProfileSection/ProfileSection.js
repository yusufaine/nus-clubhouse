import {
    Box
} from '@chakra-ui/react'

import ProfileHeaderSection from '../ProfileHeaderSection/ProfileHeaderSection'
import ProfileTabs from '../ProfileTabs/ProfileTabs'

function ProfileSection({ user }) {
    return (
        <Box>
            <ProfileHeaderSection name={user.name} username={user.username}/>
            <ProfileTabs user={user}/>
        </Box>
    )
}

export default ProfileSection
