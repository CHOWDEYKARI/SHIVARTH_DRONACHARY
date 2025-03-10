import React from 'react';
import { Link } from 'react-router-dom';

const PHeader = () => {
  return (
    <div>
      <h1>Header - Main Page</h1>
      <button>
        <Link to="/">Product Page</Link>
      </button>
     
    </div>
  );
};

export default PHeader;
