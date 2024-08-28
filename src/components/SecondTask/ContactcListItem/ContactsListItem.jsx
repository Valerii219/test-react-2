const ContactListItem = ({contacts}) => {
    return (
      <>
       <ul>
            {contacts.map(({id, name, number})=> (
              <li key={id}>{name}:{number }</li>
            ))}
          </ul>
      </>
    );
  };
  
  export default ContactListItem;
  