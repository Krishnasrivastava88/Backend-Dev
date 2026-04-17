const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    lastActive: Date,
    loginTime: Date,
    logoutTime: Date
});

userSchema.pre('save', function(next){
    this.lastActive = new Date();
    next();
});

module.exports = mongoose.model('User', userSchema);