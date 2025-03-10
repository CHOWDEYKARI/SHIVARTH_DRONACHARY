import React from 'react';
import ComponentA from './Component/diy79/ComponentA';

export const OrganizationContext = React.createContext();
export const CourseContext = React.createContext();
export const StudentsContext = React.createContext();

const students = [
  { firstName: 'Lena', lastName: 'Smith', rollNo: 12 },
  { firstName: 'Tom', lastName: 'Taylor', rollNo: 16 },
  { firstName: 'John', lastName: 'Smith', rollNo: 87 },
];

function App() {
  const organization = 'Edureka';
  const course = 'Full Stack Web Development';

  const handleHover = (event) => {
    event.target.style.textShadow = '4px 4px 8px rgba(0, 0, 0, 0.7)';
  };

  const handleHoverExit = (event) => {
    event.target.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';
  };

  return (
    <div>
      <div className="text">
        <h1
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
          style={{
            fontFamily: 'Arial, sans-serif',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            transition: 'text-shadow 0.3s',
            marginBottom: '20px',
          }}
        >
          App
        </h1>
      </div>
      <OrganizationContext.Provider value={organization}>
        <CourseContext.Provider value={course}>
          <StudentsContext.Provider value={students}>
            <ComponentA />
          </StudentsContext.Provider>
        </CourseContext.Provider>
      </OrganizationContext.Provider>
    </div>
  );
}

export default App;
