const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const { Schema } = mongoose;

const opinionSchema = new Schema({
  pregunta: String,
  opinion : String,
  fecha: String,
  pregunta: String,
});


module.exports = mongoose.model('opinion', opinionSchema);
