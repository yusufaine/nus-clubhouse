import {
    Box
} from '@chakra-ui/react'

import ProfileHeaderSection from '../ProfileHeaderSection/ProfileHeaderSection'
import ProfileTabs from '../ProfileTabs/ProfileTabs'

function ProfileSection({ userId, profileId, name, username, bio, profileImgUrl, numFollowers, numFollowing, following }) {
    console.log('following users value: ', following)
    return (
        <Box w='100%'>
            <ProfileHeaderSection 
                id={profileId} 
                name={name} 
                username={username} 
                bio={bio} 
                profileImgUrl={profileImgUrl}
                isUser={userId == profileId} 
                following={following}
            />
            <ProfileTabs numFollowers={numFollowers} numFollowing={numFollowing}/>
        </Box>
    )
}

export default ProfileSection
