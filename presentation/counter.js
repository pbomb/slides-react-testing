import React from 'react';
import styled from 'react-emotion';

const StyledCount = styled('span')(
  {
    margin: '1em',
  },
  ({ clicks }) => ({
    color: clicks < 0 ? 'red' : clicks > 0 ? 'green' : 'black',
  })
);

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
        <StyledCount data-testid="count" clicks={this.state.clicks}>
          {this.state.clicks}
        </StyledCount>
        <button onClick={this.handleIncrement} data-testid="increment">
          +
        </button>
      </div>
    );
  }
}
