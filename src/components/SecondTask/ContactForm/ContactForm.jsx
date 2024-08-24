import css from './ContactForm.module.css'
const ContactForm = ({name, changeName, onSubmit, contacts}) => {
  return (
    <>
      <form >
        <label className={css.label}>Name
                  <input
                      className={css.input}
            type="text"
                      name="name"
                      value={name}
                      onChange={changeName}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
            required
                  />
                  <button type='submit'onClick={onSubmit}></button>
                  <ul>

                  </ul>{contacts.map(contact =>
           <li key={contact.id}>{contact.name}</li>
      )}
              </label>
              
      </form>
    </>
  );
};

export default ContactForm;