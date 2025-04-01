const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



module.exports.userauth = async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1] || req.cookies.token   ; // Extract token from the Authorization header
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); 
        const user = await userModel.findById(decoded._id); // Find the user by ID from the token
        req.user = user; // Attach the user to the request object
        return next(); // Call the next middleware or route handler
       
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}