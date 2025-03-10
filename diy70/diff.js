import React, { Component } from "react";

class Diff extends Component {
  render() {
    const tableStyle = {
      border: "1px solid black",
      borderCollapse: "collapse",
      width: "100%",
      textAlign: "left"
    };

    const thTdStyle = {
      border: "1px solid black",
      padding: "8px"
    };

    return (
      <div>
        <p>What is the difference between a class component and a functional component?</p>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thTdStyle}>Functional Component</th>
              <th style={thTdStyle}>Class Component</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={thTdStyle}>
                Functional components are simple to read, understand, and are written in a few lines of code.
              </td>
              <td style={thTdStyle}>
                Class components offer more features, making the code a little bulkier than functional components.
              </td>
            </tr>
            <tr>
              <td style={thTdStyle}>
                They can access props, but they lack state and lifecycle methods, hence used as presentational components.
              </td>
              <td style={thTdStyle}>
                They are used as container components, as they access props, handle state management, and lifecycle methods.
              </td>
            </tr>
            <tr>
              <td style={thTdStyle}>
                Due to the lack of state, functional components are stateless.
              </td>
              <td style={thTdStyle}>
                Class components are stateful and make use of constructors to initialize state.
              </td>
            </tr>
            <tr>
              <td style={thTdStyle}>They do not need the 'this' keyword to access props.</td>
              <td style={thTdStyle}>They make use of the 'this' keyword to access props.</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Diff;
