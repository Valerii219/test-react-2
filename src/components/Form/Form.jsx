import React from 'react';

const ContactBook = ({ name, changeValue, submit, contacts, number,  }) => {
  return (
    <>
      <form onSubmit={submit}>
        <label>
          Name
          <input
            value={name}
            onChange={changeValue}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
            required
          />
        </label>
        <label>
          Number
          <input
            onChange={changeValue}
            type="tel"
            name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
      <h2>Contacts</h2>
    
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}:{contact.number}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactBook;
