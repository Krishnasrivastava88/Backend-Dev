const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    isDeleted: { type: Boolean, default: false }
});

schema.pre(/^find/, function(next){
    this.where({ isDeleted: false });
    next();
});

module.exports = schema;