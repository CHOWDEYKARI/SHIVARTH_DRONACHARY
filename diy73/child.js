import React from 'react';

class Child extends React.Component {
  handleChange = (event) => {
    this.props.onValueChange(event.target.value);
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
      </div>
    );
  }
}

export default Child;
