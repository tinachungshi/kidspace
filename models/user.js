var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

const SALT_ROUNDS = 6;

var itemSchema = new Schema({
  name: String,
  amazon_ID: String,
  description: String,
  photo_url: String,
  price: Number,
  link: String
});

var userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  wishlist: [itemSchema]
}, {
  timestamp: true
});


userSchema.pre('save', function(next) {
  // this will be set to the current document
  var user = this;
  if (!user.isModified('password')) return next();
  // password has been changed - salt and hash it
  bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
    if (err) return next(err);
    // override the user provided password with the hash
    user.password = hash;
  });
});

module.exports = mongoose.model('User', userSchema);
