import { Component } from 'react';
import Statistics from './Statistic/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

// import Counter from './Counter';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleIncrementGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
     
    }));
  };
  handleIncrementNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleIncrementBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((this.state.good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    const incrementGood = this.handleIncrementGood;
    const incrementNeutral = this.handleIncrementNeutral;
    const incrementBad = this.handleIncrementBad;

    return (
      <>
        {/* <h1>State of components</h1> */}
        {/* <Counter /> */}
        <h1>Please leave feadback</h1>
        <FeedbackOptions
          options={{ good: 'Good', neutral: 'Neutral', bad: 'Bad' }}
          onLeaveFeedback={{ good: incrementGood, neutral: incrementNeutral, bad: incrementBad }}
        />
        <p>Statistics</p>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positive}
        />
      </>
    );
  }
}
