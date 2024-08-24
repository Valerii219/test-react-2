import { Component } from 'react';
import ContactForm from './SecondTask/ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import ContactListItem from './SecondTask/ContactList/ContactsList';

export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

  changeName = (e) => {
    this.setState({ name:e.currentTarget.value })
  }

  addContact = (contact) => {
    const newContact = {
      id: nanoid(),
      name: contact.name,
    };

    this.setState(prevState => ({
      [this.state.contacts]:[...prevState.contacts, newContact]
    }))
  }
    
  render() {
    const { name, contacts } = this.state;
    return (
      <>
        <ContactForm name={name} changeName={this.changeName} contacts={contacts}  onSubmit={this.addContact}/>
        {/* <ContactListItem addContact={this.addContact}/> */}

       
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