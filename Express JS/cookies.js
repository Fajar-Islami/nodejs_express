// cookies untuk menyimpan session

let express = require('express');
let cookieParser = require('cookie-parser');

let app = express();
app.use(cookieParser());

app.get('/', function (req, res) {
  // buat /mengisi cookie
  res.cookie('myFirstCookie', 'look Good');
  // params ke 3 waktu kadaluarsanya cookie {}
  res.end('wow');
});

app.get('/removeCookie', function (req, res) {
  // hapus cookie
  res.clearCookie('myFirstCookie', 'look Good');
  // params ke 3 waktu kadaluarsanya cookie {}
  res.end('wow');
});

app.listen(7777, function () {
  console.log('Yeah?');
})