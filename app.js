var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.sendfile('./index.html');
});

var server = app.listen(3000, function () {
  var host = "localhost";
  var port = 3000;

  console.log('Example app listening at http://%s:%s', host, port);
});