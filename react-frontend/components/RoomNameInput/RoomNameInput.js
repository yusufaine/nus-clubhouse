import ClubhouseInput from '../ClubhouseInput/ClubhouseInput'

function RoomNameInput({ field, valid, ...props }) {
    return (
        <ClubhouseInput 
            {...field}
            id='name'
            placeholder='Room name' 
            rounded='lg'
            {...props}
        />
    )
}

export default RoomNameInput
