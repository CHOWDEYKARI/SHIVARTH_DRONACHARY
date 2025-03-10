import React from 'react';
// import 'react-bootstrap-typehead/css/typehead.css'
// import './counter.css'
class ChildComponentB extends React.Component {
    render() {
        return (
            <div>
                <p className='TD'>Value from Child A: {this.props.parentValue}</p>
                {/* <h2>We are Future</h2> */}
            </div>
        );
    }
}

export default ChildComponentB;
