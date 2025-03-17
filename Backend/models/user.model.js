const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullname: {
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


userSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET , { expiresIn: '1h' }) ;
    return token;
};

userSchema.methods.comparePassword = async function (password) {
    const user = this;
    return await bcrypt.compare(password, user.password);
};

userSchema.statics.hashPassword = async function(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

 const userModel = mongoose.model('User', userSchema);
module.exports = userModel;