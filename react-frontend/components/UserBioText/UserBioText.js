import {
    Text
} from '@chakra-ui/react'

function UserBioText({ bioText }) {
    return (
        <Text fontSize='14px' isTruncated maxWidth='285px'>
            {bioText}
        </Text>
    )
}

export default UserBioText
