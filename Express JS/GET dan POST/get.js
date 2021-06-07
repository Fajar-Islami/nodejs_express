var express = require('express');
var path = require('path');
var app = express();

// file css
app.use('/cssFiles', express.static(__dirname + '/assets'))

// file halaman index
app.get('/', function (req, res) {
  let respon = "Hello " + req.query.namaDepan;
  res.end(respon);
});


// supaya bisa jalan
app.listen(7777, function () {
  console.log('Listening at Port 7777');
});