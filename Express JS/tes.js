var express = require('express');
var app = express();

// native
// response.writeHead(200, {
//   'Content-Type': 'text/plain',
//   'header': 'coba header'
// });

// response.end('Hello server world, request from ' + request.url);

// express
app.get('/helloThere', function (req, res) {
  res.send('Hello there, from Express')
})

app.listen(1337, function () {
  console.log('Listening at Port 1337');
});