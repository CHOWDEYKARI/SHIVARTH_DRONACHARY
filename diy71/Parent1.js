import React from 'react';
import Child from './Child1';

class Parent extends React.Component {
  render() {
    return (
      <div style={{ textAlign: 'center', border: '2px solid red', padding: '10px' }}>
        <h1>Users</h1>
        <Child Fname="Name:" Mname="Tony" Lname="Stark" />
        <Child Fname="Name:" Mname="James" Lname="Marry" />
        <Child Fname="Name:" Mname="Drona" Lname="Shivarth" />
      </div>
    );
  }
}

export default Parent;
