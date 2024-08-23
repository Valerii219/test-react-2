import { Component } from 'react';
// import Statistics from './Statistic';
// import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
// import Section from './Section/Section';
// import Message from './Notification message/Message';
import ContactBook from './Form/Form';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';

// import Counter from './Counter';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
    // good: 0,
    // neutral: 0,
    // bad: 0,
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { name, number } = this.state;

    // Check if the contact name is not empty and is valid
    if (name.trim() === '') return;

    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
      name: '',
      number: '',
    }));
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  // handleSubmit = evt => {
  //   evt.preventDefault();
  //   const form = evt.currentTarget;
  //   console.dir(form);
  //   const login = form.elements.login.value;
  //   const password = form.elements.password.value;
  //   console.log(login, password);

  //   this.props.onSubmit({ login, password });
  //   form.reset();
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

  render() {
    // const { good, neutral, bad } = this.state;
    // const total = this.countTotalFeedback();
    // const positive = this.countPositiveFeedbackPercentage();
    const { name, number,contacts,  filter } = this.state;
    const changeValue = this.handleChange;
    const submit = this.handleSubmit;
    const normalizedFilter = filter.toLowerCase();
    const filterContacts = contacts.filter(contact =>contact.name.toLowerCase().includes(normalizedFilter))

    return (
      <>
        <ContactBook
          name={name}
          contacts={filterContacts}
          number={number}
          changeValue={changeValue}
          submit={submit}
        />
        <Filter changeFilter={this.changeFilter} filter={filter} />

        {/* <h1>State of components</h1> */}
        {/* <Counter /> */}
        {/* <Section title={'Please leave feadback'}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positive}
            />
          ) : (
            <Message message={'There is no feedback'} />
          )}
        </Section> */}
      </>
    );
  }
}
