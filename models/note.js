const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    parent:{
        type: String,
        required: true
    },
    body:{
        type: String
    }
}, {timestamps:true});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;

