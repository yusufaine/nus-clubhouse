import ClubhouseInput from '../ClubhouseInput/ClubhouseInput'

function ProfileUsernameInput({ field, valid, ...props }) {
    return (
        <ClubhouseInput 
            {...field}
            id='username'
            placeholder='Username'
            rounded='lg'
            {...props}
        />
    )
}

export default ProfileNameInput