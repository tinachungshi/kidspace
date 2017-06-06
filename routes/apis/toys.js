var express = require('express');
var router = express.Router();
var ebayController = require('../../controllers/ebayAPIs')

router.get('/search', ebayController.search)

module.exports = router;
