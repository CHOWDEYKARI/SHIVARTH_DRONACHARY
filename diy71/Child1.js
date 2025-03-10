import React from 'react';

class Child extends React.Component {
  render() {
    return (
      <div>
        <h3>
          {`${this.props.Fname} ${this.props.Mname} ${this.props.Lname}`}
        </h3>
      </div>
    );
  }
}

export default Child;
