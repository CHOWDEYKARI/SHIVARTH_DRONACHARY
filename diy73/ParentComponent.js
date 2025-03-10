import React from 'react';
import Child from './child';

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueFromChild: ''
    };
  }

  handleValueChange = (value) => {
    this.setState({ valueFromChild: value });
  }

  render() {
    return (
      <div>
        <Child onValueChange={this.handleValueChange} />
        <p>Value from Child: {this.state.valueFromChild}</p>
      </div>
    );
  }
}

export default ParentComponent;
