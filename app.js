var express = require('express');
var app = express();
var Twit = require('twit');
var T = new Twit({
  consumer_key:         'gbRgf2rBOJ0YNZzB0e9BDiT4l',
  consumer_secret:      '5jqnbE1WdlV209zaCDRd9lfesUG8WB1nma953KqTJU2DKYlFov',
  access_token:         '899967843596472321-44cjZdA0dYjbLEKKxx0M8O4OFtI1Mvb',
  access_token_secret:  'DcooVvgPYBC02WWeydxu9Azf8qFhgRvckLUws2qOBPhwc',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});
var params = { screen_name: '@phenixtest', count: 100 };

//header shit

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://www.bail.phenixcustomers.co.uk/');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

T.get('statuses/user_timeline', params, gotData);


function gotData(err, data, response) {

  for (var i = 0; i < data.length; i++) {
    console.log(data[i].text);
  }
}

