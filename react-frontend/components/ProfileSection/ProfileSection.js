import {
    Box
} from '@chakra-ui/react'

import ProfileHeaderSection from '../ProfileHeaderSection/ProfileHeaderSection'
import ProfileTabs from '../ProfileTabs/ProfileTabs'

function ProfileSection({ name, username, bio, profileImgUrl, numFollowers, numFollowing }) {
    return (
        <Box w='100%'>
            <ProfileHeaderSection name={name} username={username} bio={bio} profileImgUrl={profileImgUrl}/>
            <ProfileTabs numFollowers={numFollowers} numFollowing={numFollowing}/>
        </Box>
    )
}

export default ProfileSection
