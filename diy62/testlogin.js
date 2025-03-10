// testLogin.js

const login = async () => {
    const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: 'shiva',
            password: 'shiva123',
        }),
    });

    if (response.ok) {
        const data = await response.json();
        console.log('Login successful, token:', data.token);
    } else {
        const error = await response.text();
        console.error('Login failed:', error);
    }
};

// Call the login function when needed
login();
