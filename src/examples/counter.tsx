import * as React from 'react';
import Display from './display';

export type Props = {
  disabled?: boolean;
};
export type State = {
  clicks: number;
};

export default class Counter extends React.Component<Props, State> {
  state = {
    clicks: 0,
  };

  handleDecrement = () =>
    this.setState(state => ({ clicks: state.clicks - 1 }));

  handleIncrement = () =>
    this.setState(state => ({ clicks: state.clicks + 1 }));

  render() {
    const disabled = !!this.props.disabled;
    return (
      <div>
        <button
          onClick={this.handleDecrement}
          disabled={disabled}
          data-testid="decrement"
        >
          -
        </button>
        <Display clicks={this.state.clicks} />
        <button
          onClick={this.handleIncrement}
          disabled={disabled}
          data-testid="increment"
        >
          +
        </button>
      </div>
    );
  }
}
