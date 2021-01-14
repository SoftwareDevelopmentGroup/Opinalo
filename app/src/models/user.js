const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const { Schema } = mongoose;

const userSchema = new Schema({
  email: String,
  password: String,
  nacimiento: String,
});

userSchema.methods.encryptPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchema.methods.comparePassword= function (password) {
  return bcrypt.compareSync(password, this.password);
};
userSchema.methods.age= () =>{
  var año= (new Date).getFullYear();
  var edad = parseint(this.nacimiento.substr(-4,4));
  if ((new Date).getMonth()+1==parseInt(this.nacimiento.substr(3,2))){
    if ((new Date).getDate()>parseInt(this.nacimiento.substr(0,2))){
      return edad -año;
    }
    else {
      return edad-año+1;
    }
  }
  else {
    if ((new Date).getMonth()+1>parseInt(this.nacimiento.substr(3,2))){
      return edad-año;
    }
    else {
      return edad-año+1;
    }

   }


};
module.exports = mongoose.model('user', userSchema);
