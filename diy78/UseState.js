import React, { useState } from 'react'

// function Counter78() {
//     const [count, setCount] = useState(0);
//     return (
//         <div>
//             <h1>Hooks</h1>
//             <p>You Clicked {count} times</p>
//             <button onClick={() => setCount(count + 1)}>
//                 <p>Click Me !</p>
//             </button>
//         </div>
//     )
// }

function Counter78() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);
    const increaseByTwo = () => {
        for (let i = 0; i < 2; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }
    return (
        <div>

            <h1>Count : {count}</h1>
            <p>
                <button onClick={() => setCount(initialCount)}>
                    Reset
                </button> <br />
                <br />

                <button onClick={() => setCount(prevCount => prevCount + 1)}>
                    Increase
                </button>

                <span>      </span>
                <button onClick={() => setCount(prevCount => prevCount - 1)}>
                    Decrease
                </button> <br /> <br />

                <button onClick={increaseByTwo}>
                    Increase by 2
                </button>

            </p>
        </div>
    )
}
export default Counter78;