const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  email: String
});

module.exports = mongoose.model("User", schema);