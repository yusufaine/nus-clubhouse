import {
    Avatar,
    AvatarGroup
} from '@chakra-ui/react'

function RoomCardAvatarGrp({ users }) {
    var displayUsersNames 
    users.slice(0, 2).map((user) => {
        displayUsersNames += `${user.name}, `
    })
    return (
        <Box mt='16px'>
            <AvatarGroup size='sm' max={2} mr='12px'>
                {users.map((user) => (
                    <Avatar name={user.name} src={user.profileImgUrl} />
                ))}
            </AvatarGroup>
            <Text>
                {displayUsersNames}
            </Text>
        </Box>
        
    )
}

export default RoomCardAvatarGrp
