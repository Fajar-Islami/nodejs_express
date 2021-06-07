var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();

// Middleware
let bodyParser = require('body-parser');

// untuk post
app.use(bodyParser());

// file css
app.use('/cssFiles', express.static(path.join(__dirname, '../assets')))

// GET
app.get('/', function (req, res) {
  // mengirim file ke halaman /
  res.sendFile('form.html', {
    root: path.join(__dirname, '../HTML Server')
  })
});

// POST
app.post('/', function (req, res) {
  // mengirim file ke halaman /
  res.end(JSON.stringify(req.body));

});


// supaya bisa jalan
app.listen(7777, function () {
  console.log('Listening at Port 7777');
});