import React from 'react'
// import '../Styles/ComponentStyles.css';
import ComponentC from './ComponentC';

function ComponentB() {
    const styles = {
        fontFamily: 'Verdana, sans-serif',
        fontWeight: 'bold',
        webkitTransform: 'rotate(45deg)',
        animation: 'glitchANimation 2s infinite',
        transformStyle: 'peserve-3d',
        color: '#ff6347',
        padding: '10px',
        justifyContent: 'center',
        display: 'flex',
        alignItem: 'center',
        marginTop: '60px',

    };
    const handleHover = (event) => {
        event.target.style.tranform = 'rotate(180deg)';
    };
    const handleHoverExit = (event) => {
        event.target.style.transform = 'rotate(0deg)';
    };

    return (
        <div>
            <h2 style={styles} onMouseEnter={handleHover} onMouseLeave={handleHoverExit}>
                ComponentB
            </h2>
            <ComponentC />
        </div>
    );
}
export default ComponentB;