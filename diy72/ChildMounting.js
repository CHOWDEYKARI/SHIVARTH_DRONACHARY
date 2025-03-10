import React from "react";

class ChildMounting extends React.Component {
    constructor() {
        super();
        console.log("Component B : Constructor() Method");
    }
    static getDerivedStateFromProps() {
        console.log("ComponentB:getDerivedStateFromProps() Method ");
    }
    componentDidMount() {
        console.log("Component B: componentDidMount() Method");
    }
    render() {
        console.log("Component B: render() Method");
        return (
            <div>
                Child Mounting Phase
            </div>
        )
    }
}

export default ChildMounting;