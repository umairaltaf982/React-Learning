import React, { PureComponent } from 'react';

class PureComponentDemo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidUpdate() {
    console.log("PureComponent re-rendered");
  }

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count })}>
          Set Same Count
        </button>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increase Count
        </button>
      </div>
    );
  }
}

export default PureComponentDemo;
