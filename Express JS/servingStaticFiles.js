var express = require('express');
var app = express();

console.log(__dirname);

// mengambil css
app.use('/cssFiles', express.static(__dirname + '/assets'))

app.get('/helloThere', function (req, res) {
  res.send('Hello there, from Express')
})

// supaya bisa jalan
app.listen(7777, function () {
  console.log('Listening at Port 7777');
});