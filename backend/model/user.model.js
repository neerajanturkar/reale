const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        first_name: {type: String},
        last_name: { type: String},
    },
    email: { type: String, required: true },
    phone: {type: String}

});


const User = module.exports = mongoose.model('User', userSchema);