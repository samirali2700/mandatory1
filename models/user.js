const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    firsstname: {
        type: String,  
    },
    lastname: {
        type: String
    },
    password: {
        type: String,
        required: true
    }

}, {timestams:true});

const User = mongoose.model('User',userSchema);

module.exports = User;