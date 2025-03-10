// 1. Pass a value from Parent Component to Child Component
import React from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends React.Component {
  render() {
    const valueToPass = "Hello from Parent";
    return (
      <div>
        <h1>Passing Values from <strong>Parent to child</strong></h1>
      <h4>Parent Component ------------ {'>'} Child Component</h4>
      
        <ChildComponent value={valueToPass} />
        <ChildComponent text = "Child Component" />
      </div>
    );
  }
}

export default ParentComponent;
