// controllers/userController.js
const userModel = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your_jwt_secret_key'; // Set your secret key in an environment variable

async function register(req, res) {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required." });
        }

        const userId = await userModel.registerUser(username, password);
        res.status(201).json({ userId });
    } catch (err) {
        console.error("Error registering user:", err);
        res.status(500).send("Internal Server Error");
    }
}

async function login(req, res) {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required." });
        }

        const user = await userModel.findUser(username);
        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ userId: user._id, username }, SECRET_KEY, { expiresIn: '1h' });
            res.json({ token });
        } else {
            res.status(401).send("Invalid credentials");
        }
    } catch (err) {
        console.error("Error logging in user:", err);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = { register, login };
