import React, { Component } from 'react';

// Child component using props only (read-only)
const Greeting = (props) => {
  return <h2>Hello, {props.username}!</h2>;
};

class PropsVsStateExample extends Component {
  constructor(props) {
    super(props);
    // State: internal value
    this.state = {
      counter: 0
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  };

  render() {
    // Props: passed down to child
    const userNameFromState = `Umair ${this.state.counter}`;

    return (
      <div style={{ padding: "1rem", border: "2px dashed gray", borderRadius: "10px" }}>
        {/* Passing state as props */}
        <Greeting username={userNameFromState} />

        {/* State controlled internally */}
        <h3>Count is: {this.state.counter}</h3>
        <button onClick={this.increment}>Increase</button>
      </div>
    );
  }
}

export default PropsVsStateExample;
