const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    dni: {
        type: Number,
        unique: true
    },
    type_user: {
        type: Number,
        default:1
    },
});

const User = mongoose.model('users',userSchema);

module.exports = User;