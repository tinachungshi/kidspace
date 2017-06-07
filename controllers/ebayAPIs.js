var request = require('request');

function search(req, res) {
  console.log(req.query)
  var url = "http://svcs.ebay.com/services/search/FindingService/v1";
      url += "?OPERATION-NAME=findItemsByKeywords";
      url += "&SERVICE-VERSION=1.0.0";
      url += `&SECURITY-APPNAME=${process.env.EBAY_APP}`;
      url += "&GLOBAL-ID=EBAY-US";
      url += "&RESPONSE-DATA-FORMAT=JSON";
      url += "&REST-PAYLOAD";
      url += `&keywords=${encodeURI('toys bestsellers ' + (req.query.keywords ? req.query.keywords : ''))}`;

  request(url, function(error, response, body) {
    var toys = JSON.parse(body).findItemsByKeywordsResponse[0].searchResult[0].item;
    toys = toys.map(toy => ({
      name: toy.title[0],
      ebayId: toy.itemId[0],
      photoUrl: toy.galleryURL[0],
      price: toy.sellingStatus[0].currentPrice[0].__value__,
      link: toy.viewItemURL[0]
    }));
    res.json(toys);
  });
}

module.exports = {
  search
}
