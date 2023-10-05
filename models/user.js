const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    country: String,
    age: {
        type: Number,
        required: [true, 'The age is mandatory!!']
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
