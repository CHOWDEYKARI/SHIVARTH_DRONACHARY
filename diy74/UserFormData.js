import React from "react";
import './user.css';

class UserFormData extends React.Component {

    constructor() {
        super();
        this.state = {
            isClicked: false,
            FN: '',
            rollNo: ''
        };
    }
    handleNameChange = (event) => {
        this.setState({ FN: event.target.value });
    }
    handleRollChange = (event) => {
        this.setState({ rollNo: event.target.value });
    }
    handleClick = () => {
        this.setState({ isClicked: true });
    }

    render() {
        if (!this.state.isClicked) {
            return (
                <div className="beforeForm">
                    <h3 className="name">MERN STACK DEVELOPER</h3>
                    <button onClick={this.handleClick}>Apply Now</button>
                </div>
            );
        } else {
            return (
                <div className="afterForm">
                    <h3 className="name">MERN STACK DEVELOPER</h3>
                    <form onSubmit={this.handleSubmit}>
                        <legend>Register your name:</legend>
                        <input
                            type="text"
                            name="name"
                            value={this.state.FN}
                            onChange={this.handleNameChange}
                        />
                        <br />
                        <legend>Enter your ID:</legend>
                        <input
                            type="number"
                            name="id"
                            value={this.state.rollNo}
                            onChange={this.handleRollChange}
                        />
                        <br />
                        <input type="submit" value='Submit Now' />
                    </form>
                </div>
            );
        }
    }
}

export default UserFormData;
