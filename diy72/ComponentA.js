import React from "react";
import ComponentB from "./ComponentB";

class ComponentA extends React.Component {

    constructor() {
        super();
        this.state = {
            value: 0
        }
    }
    handleClick = () => {
        this.setState(
            { value: 1 },
        );
    }
    static getDerivedStateFromProps() {
        console.log("ComponentA:getDerivedStateFromProps() Method ");
    }
    shouldComponentUpdate() {
        console.log("Component A: shouldComponentUpdate() Method ");
        return true;
    }
    componentDidMount() {
        console.log("Component A: componentDidMount() Method");
    }
    getSnapshotBeforeUpdate() {
        console.log("Component A: getSnapsshotBeforeUpdate() Method");
        return true;
    }
    componentDidUpdate() {
        console.log("Component A: componentDidUpdate() Method");
        return true;
    }
    render() {
        console.log("Component A: render() Method");
        return (
            <div>
                Parent Mounting Phase
                <ComponentB />
                <button onClick={this.handleClick}
                    style={{ backgroundColor: 'blue', height: '60px', width: '200px', color: 'white' }}>Update</button>
            </div>
        )
    }
}
export default ComponentA;