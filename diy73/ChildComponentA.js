import React from 'react';

class ChildComponentA extends React.Component {
    constructor(props) {
        super(props);
        this.name = "Hey, I am Edureka's First Student";
        this.childFunction = this.childFunction.bind(this);
    }

    childFunction(a) {
        a.preventDefault();
        this.props.callFromParent(this.name);
    }

    render() {
        return (
            <div>
                <button
                    onClick={this.childFunction}
                    style={{ backgroundColor: 'blue', height: '40px', width: '180px', cursor: 'pointer' }}
                >
                    Transfer Data
                </button>
            </div>
        );
    }
}

export default ChildComponentA;
