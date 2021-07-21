import {
    Box
} from '@chakra-ui/react'

import ProfileHeaderSection from '../ProfileHeaderSection/ProfileHeaderSection'
import ProfileTabs from '../ProfileTabs/ProfileTabs'

function ProfileSection({ name, username, numFollowers, numFollowing }) {
    return (
        <Box>
            <ProfileHeaderSection name={name} username={username}/>
            <ProfileTabs numFollowers={numFollowers} numFollowing={numFollowing}/>
        </Box>
    )
}

export default ProfileSection
