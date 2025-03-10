import React from 'react'
import ComponentB from './ComponentB'
// import '../Styles/ComponentStyles.css';

function ComponentA() {
    const styles = {
        fontFamily: 'Verdana, sans-serif',
        fontWeight: 'bold',
        webkitTransform: 'rotate(45deg)',
        animation: 'glitchANimation 0.8s infinite',
        transformStyle: 'peserve-3d',
        color: 'red',
        padding: '10px',
        justifyContent: 'center',
        display: 'flex',
        alignItem: 'center',
        marginTop: '60px',

    };
    const handleHover = (event) => {
        event.target.style.tranform = 'rotate(45deg)';
    };
    const handleHoverExit = (event) => {
        event.target.style.transform = 'rotate(0deg)';
    };

    return (
        <div className='componentA'>
            <h2 style={styles} onMouseEnter={handleHover} onMouseLeave={handleHoverExit}>
                ComponentA
            </h2>
            <ComponentB />
        </div>
    );
}
export default ComponentA;