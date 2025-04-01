const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');

module.exports.registerUser = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password } = req.body;

    // Check if user with this email already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
        return res.status(409).json({ message: 'Email already in use' });
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    });
    
    console.log(user); // Log the user object to see its structure

    if (typeof user.generateAuthToken !== 'function') {
        console.error('generateAuthToken is not a function on the user object');
    }

    const token = user.generateAuthToken();
    res.status(201).json({ user, token });
}

module.exports.loginUser = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).select('+password');

    if (!user) {
        return res.status(401).json({ message: 'User not found' });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = await user.generateAuthToken();

    // Set cookie before sending response
    res.cookie('token', token);
    return res.status(200).json({ user, token });
}

module.exports.logoutUser = async (req, res) => {
    req.user.tokens = req.user.tokens.filter(token => token.token !== req.token);
    await req.user.save();
    res.status(200).json({ message: 'Logged out successfully' });
}

module.exports.getUserProfile = async (req, res) => {
    res.status(200).json(req.user);
    console.log("user get")
}