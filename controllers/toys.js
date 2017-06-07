var usersController = require('./users');
var createJWT = usersController.createJWT;

function addToy(req, res) {
  req.user.wishlist.push(req.body);
  if (req.user.wishlist.some(toy => toy.ebayId === req.body.ebayId))
    return res.json({token: createJWT(req.user)});
  req.user.save().then(() => res.json(createJWT(req.user)));
}







module.exports = {
  addToy
}
