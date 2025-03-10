import React from 'react';
import ChildComponentA from './ChildComponentA';
import ChildComponentB from './ChildComponentB';
// import 'react-bootstrap-typehead/css/typehead.css'
class ParentComponentA extends React.Component {
    state = { value: "" };

    parentFunction = (childData) => {
        // alert(receivedvalue);
        this.setState({ value: childData });
    };

    render() {
        return (
            <div>
                <h5>Passing Values from <strong>one child</strong> to Another</h5>
                <ChildComponentA callFromParent={this.parentFunction.bind(this)} />
                <ChildComponentB parentValue={this.state.value} />
            </div>
        );
    }
}

export default ParentComponentA;
