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
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};

app.configure(function () {
  app.use(allowCrossDomain);
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(application_root, "public")));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

var params = { screen_name: '@phenixtest', count: 100 };

T.get('statuses/user_timeline', params, gotData);


function gotData(err, data, response) {

  for (var i = 0; i < data.length; i++) {
    console.log(data[i].text);
  }
}

