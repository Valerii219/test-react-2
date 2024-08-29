import ContactListItem from "../ContactcListItem/ContactsListItem";

const ContactList = ({contacts, deleteContact}) => {
    return (
      <>
       <ul>
            {contacts.map((contact)=> (
                <ContactListItem key={contact.id} contact={contact} deleteCont={deleteContact} />
            ))}
          </ul>
      </>
    );
  };
  
  export default ContactList;