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

var cors = require('cors');

// use it before all route definitions
app.use(cors({origin: 'http://www.bail.phenixcustomers.co.uk/'}));

T.get('statuses/user_timeline', params, gotData);


function gotData(err, data, response) {

  for (var i = 0; i < data.length; i++) {
    console.log(data[i].text);
  }
}

