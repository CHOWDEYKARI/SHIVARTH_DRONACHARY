import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <div>
        <h1>Header - Main Page</h1>
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/about">About</Link>
        </button>
        <button>
          <Link to="/contact">Contact</Link>
        </button>

        <button>
          <Link to="/coustmer">Product Page</Link>
        </button>
       
      </div>
    );
  }
}

export default Header;
