import React from "react";


class ComponentB extends React.Component {
    static getDerivedStateFromProps() {
        console.log("ComponentB:getDerivedStateFromProps() Method ");
    }

    shouldComponentUpdate() {
        console.log("Component B: shouldComponentUpdate() Method ");
        return true;
    }
    componentDidMount() {
        console.log("Component B: componentDidMount() Method");
    }
    getSnapshotBeforeUpdate() {
        console.log("Component B: getSnapsshotBeforeUpdate() Method");
        return true;
    }
    componentDidUpdate() {
        console.log("Component B: componentDidUpdate() Method");
        return true;
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

export default ComponentB;