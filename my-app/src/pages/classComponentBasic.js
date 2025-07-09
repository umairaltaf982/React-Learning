import React, { Component } from 'react';

class Welcome1 extends Component {
    render() {
        return <h1>Hello, I am a class component!</h1>
    }
}

// Rendering JSX with Props in Class Components
export class Welcome2 extends Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>
    }
}

export default Welcome1;