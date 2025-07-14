import React, { Component } from 'react';

class LifecycleIntro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    console.log('Constructor: Component is initializing.');
  }

  componentDidMount() {
    console.log('componentDidMount: Component mounted.');
  }

  componentDidUpdate(prevProps, prevState) {
    alert('componentDidUpdate: Component updated.');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Component will unmount.');
  }

  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log('Render: Component rendering.');
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increase}>Increase</button>
      </div>
    );
  }
}

export default LifecycleIntro;
