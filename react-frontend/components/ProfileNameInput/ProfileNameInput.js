import ClubhouseInput from '../ClubhouseInput/ClubhouseInput'

function ProfileNameInput({ field, valid, ...props }) {
    return (
        <ClubhouseInput 
            {...field}
            id='name'
            placeholder='Name'
            rounded='lg'
            {...props}
        />
    )
}

export default ProfileNameInput
