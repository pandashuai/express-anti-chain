express-anti-chain
==================

Anti chain for express website.

Quick Start
-----------

```
var express = require('express');
var path = require('path');
var app = express();
var anti = require('express-anti-chain');
app.use(anti({
  // The whitelist that allows the referenced domain name is simple and regular
  ignore: ['localhost:*'],

  // Anti-theft chain type
  exts: ['.png', '.jpg', '.jpeg', '.gif', '.swf', '.flv'],

  // Anti-theft chain default to the picture  ---- or default: '/images/default.png',
  default: {
    images: '/images/default.png'
  },

  // The strict parameter determines whether direct access is blocked
  strict: true,

  // Print the log file ---- or log: console.log,
  log: function(url, referer, req){
    console.log('request :' + url + ' from ' + referer + ' was blocked');
  }
  
}));

// keep anti before use static
app.use(express.static(path.join(__dirname, 'public')));
app.set('port', process.env.PORT || 8000);

app.get('/', function(req, res) {
  res.redirect("/index.html");
});

app.listen(app.get('port'), function() {
  console.log("Express test server listening on http://localhost:" + app.get('port'));
});

```