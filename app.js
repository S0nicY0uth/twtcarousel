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

T.get('statuses/user_timeline', params, gotData);


function gotData(err, data, response) {

  for (var i = 0; i < data.length; i++) {
    console.log(data[i].text);
  }
}

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
