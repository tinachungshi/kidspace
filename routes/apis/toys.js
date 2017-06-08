var express = require('express');
var router = express.Router();
var ebayController = require('../../controllers/ebayAPIs')
var toysController = require('../../controllers/toys')

router.get('/search', ebayController.search);
router.post('/', toysController.addToy);

router.get('/cart', toysController.getCart);

// router.delete('/toys/:id', toysController.delete);



module.exports = router;
