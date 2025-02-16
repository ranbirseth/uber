const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        firstname: {
            type: String,
            required: true,
            minlength :[3 , 'first name must be at least 3 cherecters'],
        },
        lastname:{
            type: String,
            minlength :[3 , 'last name must be at least 3 cherecters'],
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength :[5 , 'email must be at least 5 cherecters']
    },
    password: {
        type: String,
        required: true,
        select : false ,
        
    },
    socketId:{
        type: String,
    }

});




const User = mongoose.model('User', userSchema);

module.exports = User;