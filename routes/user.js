var express = require('express');
var router = express.Router();
var toys = require('../controllers/toys');


router.get('/wishlist', toys.wishlist);



module.exports = router;


