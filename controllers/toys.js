var usersController = require('./users');
var User = require('../models/user');
var createJWT = usersController.createJWT;

function addToy(req, res) {
  User.findById(req.user._id).exec()
  .then(user => {
    if (user.wishlist.some(toy => {
      return toy.ebayId === req.body.ebayId
    })) {
      return res.json(user.wishlist);
    }
    user.wishlist.push(req.body);
    user.save().then(() => res.json(user.wishlist));
  });
}

function getCart(req, res) {
  User.findById(req.user._id).exec().then(user => {
    res.json(user.wishlist);
  });
}

function deleteToyFromDb(req, res) {
  User.findById(req.user._id).exec().then(user => {
    user.wishlist.id(req.body.toyId).remove();
    user.save().then(() => {
      res.json(user.wishlist);
    })
  });
}


module.exports = {
  addToy,
  getCart,
  deleteToyFromDb
}
