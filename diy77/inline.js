import React from 'react';
class Stylesheet extends React.Component {
    render() {
        return (
            <div>
                <h1 style={{
                    backgroundColor: 'skyblue',
                    width: '300px',
                    height: '150px',
                    border: '1px solid darkgreen',
                    textAlign: 'center',
                    display: 'grid',
                    color: 'white',
                    fontSize: '2rem',
                    fontWeight: '700',
                    justifyContent:'center',
                    placeItems:'center'
                }}>
                    Inline CSS 
                </h1>
                <hr />
                <h2 style={{
                    backgroundColor: '#e3c388',
                    width: '300px',
                    height: '150px',
                    border: '1px solid darkgreen',
                    textAlign: 'center',
                    display: 'grid',
                    color: 'white',
                    fontSize: '2rem',
                    fontWeight: '700',
                    justifyContent:'center',
                    placeItems:'center',
                    marginLeft:'500px'
                }}>
                    Stylesheet CSS 
                </h2>

<p>
What are limitations of JavaScript classes over hooks in React?
</p>
<ul>
    <li>
    Following are the limitations of JavaScript classes over hooks in React.js <br />
• Understand the functionality of "this" keyword to work with class components. <br />
• Remember to bind event handlers in class components. <br />
• Component lifecycle methods must be used while creating components for complex 
scenarios, such as data fetching and subscribing to the events. <br /> 
• Data fetching is done componentDidUpdate() and sometimes in 
componentDidMount(). <br />
• For event listeners, you set events in componentDidMount() and unsubscribe in 
componentWillUnmount(). <br />
• This leads to the splitting of code as per component lifecycle methods and not as per 
the components functional use. <br />
• Though use of multiple components may not matter in terms of view structure but can 
cause wrapper hell.
    </li>
</ul>
<hr />
<h4>
    what are hooks in React?
</h4>
<ol>
• Hooks are the special features of react version 16.8 that allows us to use the features 
of react without having to write class component.  <br />
• Hooks allows us to declare the state variables inside functional component which 
makes <br />
• the code simpler and easy to understand. <br />
• Functional components with hooks are simpler, as there is no need to define 
constructors, this keyword, lifecycle methods, destructuring the same values multiple 
times. <br />
• Hooks don't split the components as per lifecycle methods, rather they split a 
component into smaller functions based on related pieces. <br />
• They organize logic inside a component into reusable isolated units.  <br />
• They are easier to refactor and test, allows developers to write clear and concise code.
</ol>
            </div>
        )
    }
}

export default Stylesheet;