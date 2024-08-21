import { nanoid } from 'nanoid'
const id = nanoid();
const Contacts = ({prop}) => {
    return(
        <><ul><li key={id}>{prop}</li></ul></>
    )
        
}

export default Contacts;