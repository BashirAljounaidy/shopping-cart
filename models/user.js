var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var userSchema = new Schema({
    email:{type: String, required: true},
    password:{type: String, required: true}
});
//@7-13.42

userSchema.methods.encryptPassword = function(){};

module.exports =mongoose.model('User',userSchema);