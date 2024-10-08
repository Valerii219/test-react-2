import { Component } from 'react';
import ContactForm from './SecondTask/ContactForm/ContactForm';

import Filter from './SecondTask/Filter/Filter';
import ContactList from './SecondTask/ContactList/ContactsList';
export class App extends Component {
  state = {
    contacts: [

    ],
    filter: '',
  };

  componentDidMount() {
    const localContacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(localContacts);
    if (parseContacts) {
      this.setState({
        contacts: parseContacts,
      });
    }
  }
  componentDidUpdate = (_, prevState) => {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  };
  addContact = newContact => {
    const sameContact = this.state.contacts.find(
      contact => contact.name === newContact.name,
    );
    if (sameContact) {
      alert(
        `this ${sameContact.name} is already added, please writedown another name`,
      );
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = idContact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== idContact),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} changeFilter={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}

// import Counter from './FirstTask/Counter/Counter';
// import Section from './FirstTask/Section/Section';
// import FeedbackOptions from './FirstTask/FeedbackOptions/FeedbackOptions';
// import Statistics from './FirstTask/Statistic/Statistics';
// import Message from './FirstTask/Notification message/Message';
// state = {

//   good: 0,
//   neutral: 0,
//   bad: 0,
// };

// handleIncrement = option => {
//   this.setState(prevState => ({
//     [option]: prevState[option] + 1,
//   }));
// };
// countTotalFeedback = () => {
//   const { good, neutral, bad } = this.state;
//   return good + neutral + bad;
// };
// countPositiveFeedbackPercentage = () => {
//   const total = this.countTotalFeedback();
//   return total > 0 ? Math.round((this.state.good / total) * 100) : 0;
// };

// render() {
//   const { good, neutral, bad } = this.state;
//   const total = this.countTotalFeedback();
//   const positive = this.countPositiveFeedbackPercentage();

// {
//   /* <h1>State of components</h1> */
// }
// {
//   /* <Counter /> */
// }
// {
//   /* <Section title={'Please leave feadback'}>
//           <FeedbackOptions
//             options={['good', 'neutral', 'bad']}
//             onLeaveFeedback={this.handleIncrement}
//           />
//         </Section>
//         <Section title="Statistics">
//           {total > 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positive}
//             />
//           ) : (
//             <Message message={'There is no feedback'} />
//           )}
//         </Section> */
// }
