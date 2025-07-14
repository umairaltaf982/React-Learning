import React, { Component } from 'react';

class StateFullExample extends Component {
    constructor(props) {
        super(props);

        // Initial state with multiple fields (including nested object)
        this.state = {
            name: "Umair",
            age: 22,
            counter: 0,
            address: {
                city: "Lahore",
                country: "Pakistan"
            }
        };
    }

    // Regular setState (replaces specific fields, merges the rest)
    updateName = () => {
        this.setState({ name: "Muhammad Umair Altaf" });
    };

    // Functional setState (safe when using previous state values)
    incrementCounter = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }));
    };

    // Updating nested object (use spread operator to avoid overwriting other keys)
    updateCity = () => {
        this.setState((prevState) => ({
            address: {
                ...prevState.address,
                city: "Islamabad"
            }
        }));
    };

    render() {
        return (
            <div style={{ border: "2px solid #333", padding: "1rem", borderRadius: "10px" }}>
                <h2> Name: {this.state.name}</h2>
                <h2> Age: {this.state.age}</h2>
                <h2> Counter: {this.state.counter}</h2>
                <h2> City: {this.state.address.city}</h2>
                <h2> Country: {this.state.address.country}</h2>

                <button onClick={this.updateName}>Update Name</button>
                <button onClick={this.incrementCounter}>Increment Counter</button>
                <button onClick={this.updateCity}>Update City</button>
            </div>
        );
    }
}

export default StateFullExample;
