import React from "react";

import ChildMounting from "./ChildMounting";

class ParentMounting extends React.Component{
    constructor(){
        super();
        console.log("Component A:Constructor() Method");
    }
    static getDerivedStateFromProps(){
        console.log("Component A: getDerivedStateFromProps() Method");
    }
    componentDidMount(){
        console.log("Component A: ComponentDidMount() Method");
    }
    render(){
        console.log("Component A:render() Method");
        return(
            <div>
                Parent Mounting Phase
                <ChildMounting/>
            </div>
        )
    }
}

export default ParentMounting;