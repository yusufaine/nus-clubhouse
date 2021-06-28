import {
    Box,
    Stack,
    HStack,
    Wrap,
    WrapItem,
    Badge
} from '@chakra-ui/react'

import BoldText from '../BoldText/BoldText'
import RoomUserAvatar from '../RoomUserAvatar/RoomUserAvatar'

function RoomUserList({ text, users=[] }) {
    return (
        <Box px={5} py={6}>
            <HStack direction='row' spacing={4} mb={7}>
                <BoldText text={text} />
                <Badge 
                    px={4} 
                    py={0.5} 
                    bgColor='clubhousegrey.400' 
                    color='clubhousegrey.800' 
                    rounded='lg' 
                    alignContent='center'
                    fontSize='md'
                    fontWeight='extrabold'
                >
                    {users.length}
                </Badge>
            </HStack>
            <Wrap direction='row' spacing={14} w='100%' px={5}>
                {users.map((user,i) => (
                    <WrapItem key={i}>
                        <RoomUserAvatar username={user.username}/>
                    </WrapItem>
                ))}
            </Wrap>
        </Box>
    )
}

export default RoomUserList
