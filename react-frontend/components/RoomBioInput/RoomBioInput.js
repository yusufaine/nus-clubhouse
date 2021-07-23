import BioInput from '../BioInput/BioInput'

function RoomBioInput({ field, valid, ...props }) {
    return (
        <BioInput field={field} valid={valid} placeholder='Room bio' {...props}/>
    )
}

export default RoomBioInput
