import React, {Component} from 'react';

class Counter extends Component{
    //define state
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    
    //define event handler to update state
    incrementCount = () => {
        this.setState({count: this.state.count + 1});
    }

    render(){
        return(
            <div>
                <h2>Counter App</h2>
                
                <button onClick={this.incrementCount}>+</button>
            </div>
        )
    }
}