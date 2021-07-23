import BioInput from '../BioInput/BioInput'

function ProfileBioInput({ field, valid, ...props }) {
    return (
        <BioInput field={field} valid={valid} placeholder='Profile bio' {...props}/>
    )
}

export default ProfileBioInput