const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    user_id: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    refreshToken: String
})

const User = mongoose.model('User', userSchema)

module.exports = User