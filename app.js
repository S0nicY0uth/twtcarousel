var express = require('express');
var app = express();
var router = express.Router()
var Twit = require('twit');
var T = new Twit({
  consumer_key:         'gbRgf2rBOJ0YNZzB0e9BDiT4l',
  consumer_secret:      '5jqnbE1WdlV209zaCDRd9lfesUG8WB1nma953KqTJU2DKYlFov',
  access_token:         '899967843596472321-44cjZdA0dYjbLEKKxx0M8O4OFtI1Mvb',
  access_token_secret:  'DcooVvgPYBC02WWeydxu9Azf8qFhgRvckLUws2qOBPhwc',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});
var params = { screen_name: '@phenixtest', count: 100, include_entities: true };
var tweets = [];
T.get('statuses/user_timeline', params, gotData).catch(function (err) {
    console.log('caught error', err.stack)
  })
  .then(function (result) {
    console.log(result);
    // I now have the returned data from Twitter API as variable result.data, also the array we returned, tweets
    // console.log('data', result.data);
    // console.log(tweets);
    //Express Stuff!
    app.get('/', function (req, res) {



      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      res.type('application/json');
      res.send(tweets);

    });
    module.exports = router;
        app.listen(process.env.PORT || 3000, function(){
          console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
        });

      });

function gotData(err, data, response) {

  for (var i = 0; i < data.length; i++) {

    tweets.push(
      {
        'post_id': data[i].id_str,
        'status': data[i].text,
        'user_info': data[i].user,
        'entities': data[i].entities

      }

    );
  }
  return tweets;
}
