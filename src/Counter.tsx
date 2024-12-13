import React, { Component } from 'react';

// Define the shape of the state
interface CounterState {
  count: number; // The state includes a single count property of type number
}

class Counter extends Component<{}, CounterState> {
  // Initialize the state
  state: CounterState = {
    count: 0,
  };

  // Define the increment method with a void return type
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render(): JSX.Element {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
