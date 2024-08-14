import React, { Component } from 'react';

class Counter extends Component {
    static defaultProps ={
        initialValue:2
    }
  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };
  handleDecrement = () => {
    this.setState(prevState => ({
        value: prevState.value - 1,
      }));
  };

  render() {
    return (
      <div>
        <span>{this.state.value}</span>
        
      </div>
    );
  }
}

export default Counter;
