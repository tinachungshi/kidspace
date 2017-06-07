var User = require('../models/user');

const toys = {
  wishlist
}

function wishlist(req, res) {
  User.findById(req.params.id, function(err, toy) {
    if (err) return res.redirect('/');
    res.render('show', {user: req.user, toy:toy});
  });
}
