import React, { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    const { name, number } = this.state;
    this.props.addContact({ name, number });
    this.setState({name:'',number:''} )
  };

  render() {
    const changeValue = this.handleChange;
    const submit = this.handleSubmit;
    const { name, number } = this.state;
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
      </>
    );
  }
}

export default ContactForm;
