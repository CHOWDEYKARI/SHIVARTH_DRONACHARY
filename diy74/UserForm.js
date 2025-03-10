import React from "react";

import './user.css';

class UserForm extends React.Component {
    constructor() {
        super();
        this.state = { isClicked: false }
    };
    handleClick = () => {
        this.setState( { isClicked: true } )
    }

    render() {
        if (!this.state.isClicked) {
            return (
                <div className="beforeForm">
                    <h3 className="name">MERN STACK DEVELOPER</h3>
                    <button onClick={this.handleClick}>Apply Now</button>
                </div>
            );
        }
        else{
            return(
                <div className="afterForm">
                    <h3 className="name">MERN STACK DEVELOPER</h3>
                    <form>
                        <legend>Register your name:</legend>
                        <input type="text" />
                        <br></br>
                        <legend>Enter your ID:</legend>
                        <input type="number" />

                        <br></br>
                        <input type="submit" value='Submit Now' />
                    </form>
                </div>
            )
        }
    }
}

export default UserForm;