import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import './Styles/map.css'
// diy69
// import Title from './Component/diy69/title';
// ReactDOM.render(<Title />, document.getElementById('root'));
// ==================================================
// diy70 classcomponent
// import MyClassComponent from './Component/diy70/classComponent';
// ReactDOM.render(<MyClassComponent />, document.getElementById('root'));

// diy70 functionalcomponent
// import MyFirstComponent from './Component/diy70/functionalComponent';
// ReactDOM.render(<MyFirstComponent />, document.getElementById('root'));

// diy70 diff
// import Diff from './Component/diy70/diff';
// ReactDOM.render(<Diff />, document.getElementById('root'));
// ==================================================
// diy71 Pass firstName and lastName of a user as props from parent component to child component?
// import Parent from './Component/diy71/Parent1';
// ReactDOM.render(<Parent />, document.getElementById('root'));

//Create counter using state in class component
// import './counter.css'
// import Counter from './Component/diy71/Counter1';
// ReactDOM.render(<Counter />, document.getElementById('root'));
// ==================================================
// diy72 Track the order of execution of life cycle methods in a mounting phase when the child component (Component B) is nested inside Parent Component (Component A)?
// import ParentMounting from './Component/diy72/ParentMounting';
// import ChildMounting from './Component/diy72/ChildMounting';
// ReactDOM.render(<ParentMounting />, document.getElementById('root'));

// diy72Track the execution order of life cycle methods in the updation phase when the child component (Component B) is nested inside Parent Component (Component A)?
// import ComponentA from './Component/diy72/ComponentA';
// ReactDOM.render(<ComponentA/>,document.getElementById('root'));
// ==================================================
// diy73 
// 1. Pass a value from Parent Component to Child Component
// import ParentComponent from './Component/diy73/Parent';
// ReactDOM.render(<ParentComponent/>, document.getElementById('root'));

//2. Pass a value from child component to parent component?
// import ParentComponent from './Component/diy73/ParentComponent';
// ReactDOM.render(<ParentComponent/>,document.getElementById('root'));

//  Pass a value between two child components that are having same parent? 
// import ParentComponentA from './Component/diy73/ParentComponentA';
// import './counter.css'
// ReactDOM.render(<ParentComponentA/>,document.getElementById('root'));
// ==================================================

//diy74
//1. Create a form with the apply now button and show the complete form to collect the username and roll number when the user clicks on the apply now button.
// import UserForm from './Component/diy74/UserForm';
// ReactDOM.render(<UserForm/>,document.getElementById('root'));

//2.In the same form, collect the data and store the data in the state 
// variable when the user fills the data and clicks on the submit button

// import UserFormData from './Component/diy74/UserForm';
// ReactDOM.render(<UserFormData/>,document.getElementById('root'));

// 3.. In the same form, display the text “Form Submitted Successfully” when the user clicks on submit noimport React from 'react';
// import UserFormDataFetch from './Component/diy74/UserForm';
// ReactDOM.render(<UserFormDataFetch/>,document.getElementById('root'));
//=========================================
// Not working
// import React from 'react';
// import ReactDOM from 'react-dom';
// // import './user.css';
// import {BrowserRouter as Router} from 'react-router-dom';
// import UserFormDataFetch from './Component/diy74/UserForm';
// ReactDOM.render(
//     <Router basename='/'><UserFormDataFetch/></Router>,
//     document.getElementById('root')
// )
// //////////////////////////////////////////////////////

// day75
// import Map from './Component/diy75/map';
// ReactDOM.render(<Map />, document.getElementById('root'));

// day 76
// import Router from './Component/diy76/routing';
// ReactDOM.render(<Router />,
//     document.getElementById('root')
//  )
//product details 
// import Router1 from './Component/diy76/Productroute';
// ReactDOM.render(<Router1 />,
//     document.getElementById('root')
//  )

// day77
// import Stylesheet from './Component/diy77/inline';
// ReactDOM.render(
//     <Stylesheet />, document.getElementById('root')
// )

// day78
// import Counter78 from './Component/diy78/UseState';
// ReactDOM.render(<Counter78 />,
//     document.getElementById('root')
// )

// import Hooks78 from './Component/diy78/StateHooks';
// ReactDOM.render(<Hooks78 />,
//     document.getElementById('root')
// )


//day79
import App from './App';
ReactDOM.render(
    <App />, document.getElementById('root')
);