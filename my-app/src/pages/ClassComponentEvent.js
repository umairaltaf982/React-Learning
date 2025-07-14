import React, { Component } from 'react';

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello, Visitor!"
    };
  }

  changeMessage = () => {
    this.setState({ message: "Thank you for visiting, Umair!" });
  };

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={this.changeMessage}>Click Me</button>
      </div>
    );
  }
}

export default Greeting;
