import {
    Box
} from '@chakra-ui/react'

import HighlightText from '../HighlightText/HighlightText'
import RoomNameText from '../RoomNameText/RoomNameText'
import RoomUsersAvatarGroup from '../RoomUsersAvatarGroup/RoomUsersAvatarGroup'

function UpcomingRoomCard({ room }) {
    return (
        <Box 
            borderBottomWidth='1px'
            borderColor='clubhousegrey.400' 
            px='20px' 
            py='15px'
        >
            <HighlightText text='2:55 AM' mb={2}/>
            <RoomNameText text={room.name} mb={2}/>
            <RoomUsersAvatarGroup />
        </Box>
    )
}

export default UpcomingRoomCard
