var usersController = require('./users');
var User = require('../models/user');
var createJWT = usersController.createJWT;

function addToy(req, res) {
  User.findById(req.user._id).exec()
  .then(user => {
    if (user.wishlist.some(toy => {
      return toy.ebayId === req.body.ebayId
    })) {
      return res.json({token: createJWT(user)});
    }
    user.wishlist.push(req.body);
    user.save().then(() => res.json({token: createJWT(user)}));
  });
}







module.exports = {
  addToy
}
