var request = require('request');

function search(req, res) {
  var url = "http://svcs.ebay.com/services/search/FindingService/v1";
      url += "?OPERATION-NAME=findItemsByKeywords";
      url += "&SERVICE-VERSION=1.0.0";
      url += `&SECURITY-APPNAME=${process.env.EBAY_APP}`;
      url += "&GLOBAL-ID=EBAY-US";
      url += "&RESPONSE-DATA-FORMAT=JSON";
      url += "&REST-PAYLOAD";
      url += `&keywords=${encodeURI('toys bestsellers ' + (req.query.keywords ? req.query.keywords : ''))}`;

  request(url, function(error, response, body) {
    res.json(JSON.parse(body).findItemsByKeywordsResponse[0].searchResult[0].item);
  });
}

module.exports = {
  search
}
