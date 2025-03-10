import React from "react";

class TExt extends React.Component {
    constructor() {
        super();
        this.state = {
            Fname: "Dronachary",
            Lname: "Shivarth"
        }
    }
    handleChnageText =()=>{
        this.setState({Fname: "my name is "})
    }
    render() {
        return (
            <div>
                {/* <h5>{this.state.Fname}</h5>
                <h5>{this.state.Lname}</h5> */}
                <h5>{`${this.state.Fname} ${this.state.Lname}`}</h5>
                <button onClick={this.handleChnageText}>Update</button>
            </div>
        )
    }
}
export default TExt;