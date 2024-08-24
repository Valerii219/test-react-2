const {
  default: ContactsListItem,
} = require('../ContactcListItem/ContactsListItem');

const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      {contacts.length > 0 ? (
        <ul>
          {contacts.map(contact => (
            <ContactsListItem
              key={contact.id}
              contact={contact}
              deleteContact={onDelete}
            />
          ))}
        </ul>
      ) : (
        ''
      )}
    </>
  );
};

export default ContactList;
