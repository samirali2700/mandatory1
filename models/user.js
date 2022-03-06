const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
   
    firstname: {
        type: String,  
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    }

}, {timestamps:true});

const User = mongoose.model('User',userSchema);

module.exports = User;

