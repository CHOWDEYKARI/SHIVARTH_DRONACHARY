import React from "react";
// import './index.css';


class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            Counter: 0
        };
    }

    handleIncrement = () => {
        this.setState((prevState) => ({
            Counter: prevState.Counter + 1
        }));
    }

    handleDecrement = () => {
        this.setState((prevState) => ({
           Counter: prevState.Counter - 1
        }));
    }

    handleReset = () => {
        this.setState({
            Counter: 0
        });
    }

    render() {
        return (
            <div>
                <h1 className="counter">Counter</h1>
                <h1 className="box">
                    {this.state.Counter}
                </h1>
                <button onClick={this.handleIncrement} className="primary">Increment</button>
                <button onClick={this.handleDecrement} className="secondary">Decrement</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

export default Counter;
