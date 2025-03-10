import React from 'react';

class ChildComponent extends React.Component {
  render() {
    return (
      <div>
        <hr></hr>
        {this.props.text}
        
        {this.props.value}
      </div>
    );
  }
}

export default ChildComponent;
