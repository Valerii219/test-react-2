import { Component } from 'react';
// import Statistics from './Statistic';
// import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
// import Section from './Section/Section';
// import Message from './Notification message/Message';

import Filter from './SecondTask/Filter/Filter';
import ContactForm from './SecondTask/ContactForm/ContactForm';

import { nanoid } from 'nanoid';
import ContactList from './SecondTask/ContactList/ContactsList';

// import Counter from './Counter';
export class App extends Component {
  state = {

    // good: 0,
    // neutral: 0,
    // bad: 0,
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


    return (
      <>
       

        <h1>State of components</h1>
        <Counter />
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
