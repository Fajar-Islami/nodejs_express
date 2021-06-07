let express = require('express');

let app = express();

app.get('/', function (req, res) {
  res.end('wow server restart');
});

app.listen(7777, function () {
  console.log('Yeah?');
});