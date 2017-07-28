var express = require('express');
var app = express();
var path = require('path');

var host = 'localhost';
var port = 8000;

app.use(express.static('.'));

app.listen(port, host, function(err) {
  if (err) {
    console.error(err);
  } else {
    console.info('\n\n💂  Server listening at http://' + host + ':' + port + '\n');
  }
});
