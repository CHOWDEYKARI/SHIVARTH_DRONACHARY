// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Input validation middleware
const validateInput = (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required." });
    }
    next();
};

router.post('/register', validateInput, userController.register);
router.post('/login', validateInput, userController.login);

module.exports = router;
