import React from 'react';

export default class Counter extends React.Component {
  state = {
    clicks: 0,
  };

  handleDecrement = () => {
    this.setState(state => ({ clicks: state.clicks - 1 }));
  };

  handleIncrement = () =>
    this.setState(state => ({ clicks: state.clicks + 1 }));

  render() {
    return (
      <div>
        <button onClick={this.handleDecrement} data-testid="decrement">
          -
        </button>
        <span data-testid="count">{this.state.clicks}</span>
        <button onClick={this.handleIncrement} data-testid="increment">
          +
        </button>
      </div>
    );
  }
}
