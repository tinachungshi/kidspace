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

function getCart(req, res) {
  res.json(req.user.cart);
}

// function deleteToyFromWishlist = (toyIdx) => {
//     var toy = this.state.toys[toyIdx];
//     toy = JSON.stringifyi(toy);
//     toy.findByIdAndRemove(req.params.id, function (err, toy) {
//       if (err) return res.redirect('/wishlist');
//     } else {
//         res.redirect('/pets/found');
//     }
//   );
// }





module.exports = {
  addToy,
  getCart
}
