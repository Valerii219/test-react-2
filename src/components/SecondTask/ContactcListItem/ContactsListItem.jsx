import css from './ContactListItem.module.css'
const ContactListItem = ({ contact, deleteCont }) => {
  return (
    <>
      <div className={css.itemDiv}>
      <li className={css.item}>
        {contact.name}: {contact.number}
        
      </li>
      <button type="button" className={css.btn } onClick={()=>deleteCont(contact.id)}>X</button>
      </div>
      
    </>
  );
};
export default ContactListItem;
