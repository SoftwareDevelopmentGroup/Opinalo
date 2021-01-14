const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const { Schema } = mongoose;

const preguntaSchema = new Schema({
  pregunta: String,
  codigo : String,
  seccion: String,
  fin: String,
  
  
});


module.exports = mongoose.model('pregunta', preguntaSchema);
