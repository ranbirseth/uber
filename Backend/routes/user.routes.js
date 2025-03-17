const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const userController = require('../controllers/user.controller');
const { route } = require('../App');

router.post('/registor',[
    body('fullname.firstname').isLength({min:3}).withMessage('first name must be at least 3 cherecters'),
    body('fullname.lastname').isLength({min:3}).withMessage('last name must be at least 3 cherecters'),
    body('email').isEmail().withMessage('email must be valid'),
    body('password').isLength({min:5}).withMessage('password must be at least 5 cherecters')
], 
userController.registerUser);


router.post('/login',[
    body('email').isEmail().withMessage('email must be valid'),
    body('password').isLength({min:5}).withMessage('password must be at least 5 cherecters')
],

userController.loginUser);

module.exports = router;