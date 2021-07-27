import ClubhouseInput from '../ClubhouseInput/ClubhouseInput'

function RoomNameInput({ field, valid, ...props }) {
    return (
        <ClubhouseInput 
            {...field}
            id='scheduleDate'
            placeholder='Format: DD/MM/YY' 
            rounded='lg'
            {...props}
        />
    )
}

export default RoomNameInput
