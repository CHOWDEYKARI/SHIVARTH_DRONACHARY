import React, { useContext } from 'react';
import { OrganizationContext, CourseContext, StudentsContext } from '../../App';

function ComponentC() {
    const organization = useContext(OrganizationContext);
    const course = useContext(CourseContext);
    const students = useContext(StudentsContext);

    const styles = {
        fontFamily: 'Verdana, sans-serif',
        fontWeight: 'bold',
        WebkitTransform: 'rotate(45deg)',
        animation: 'glitchAnimation 2s infinite',
        transformStyle: 'preserve-3d',
        color: '#ff6347',
        padding: '10px',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        marginTop: '60px',
    };

    const handleHover = () => {
        const element = document.getElementById('component-c');
        element.style.transform = 'scale(1.2)';
    };

    const handleHoverExit = () => {
        const element = document.getElementById('component-c');
        element.style.transform = 'scale(1)';
    };

    return (
        <div>
            <h2 style={styles} id="component-c" onMouseEnter={handleHover} onMouseLeave={handleHoverExit}>
                ComponentC
            </h2>
            <h3 style={{
                color: '#ff00ff',
                justifyContent: 'center',
                display: 'flex',
            }}>
                <span style={{ color: 'red' }}>Organization:</span>{' '}
                <span style={{
                    background: 'linear-gradient(45deg, #00ffff, #ff00ff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    cursor: 'pointer',
                    animation: 'glitch 1s infinite',
                    filter: 'drop-shadow(0 0 5px cyan)',
                }}>
                    {organization}
                </span>
            </h3>
            <h3 style={{
                color: '#ff00ff',
                justifyContent: 'center',
                display: 'flex',
            }}>
                <span style={{ color: 'red' }}>Course:</span>{' '}
                <span style={{
                    background: 'linear-gradient(45deg, #00ffff, #ff00ff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    cursor: 'pointer',
                    animation: 'glitch 1s infinite',
                    filter: 'drop-shadow(0 0 5px cyan)',
                }}>
                    {course}
                </span>
            </h3>
            <table border={'1'}>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Roll No</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td style={{ color: '#ff6347' }}>{student.firstName}</td>
                            <td style={{ color: '#a00481' }}>{student.lastName}</td>
                            <td style={{ color: 'SandyBrown' }}>{student.rollNo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ComponentC;
