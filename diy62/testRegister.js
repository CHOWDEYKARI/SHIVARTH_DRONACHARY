// testRegister.js
const fetch = require('node-fetch'); // or omit this if using Node.js 18+

const register = async () => {
    const response = await fetch('http://localhost:3000/api/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: 'test_user', // Change this to your desired username
            password: 'your_password', // Change this to your desired password
        }),
    });

    if (response.ok) {
        const data = await response.json();
        console.log('Registration successful, user ID:', data.userId);
    } else {
        const error = await response.text();
        console.error('Registration failed:', error);
    }
};

// Call the register function when needed
register();
