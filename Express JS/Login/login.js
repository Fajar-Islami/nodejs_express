var express = require('express');
var app = express();
var sessions = require('express-session');

// Middleware
let bodyParser = require('body-parser');
// Membuat session
let session;

// untuk menghindari warning
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Enknripsi
app.use(sessions({
  // key untuk enkrip data
  // harusnya asal
  secret: 'qwertyuiop',
  // agar error tidak muncul
  resave: false,
  saveUninitialized: true
}))

// GET
app.get('/login', function (req, res) {
  session = req.session;

  // klo session ada (login ada)
  if (session.uniqueID) {
    res.redirect('/redirects');
  };

  res.sendFile('./login.html', {
    root: __dirname
  });

});

// POST
app.post('/login', function (req, res) {
  // klo session ada (login ada)
  if (session.uniqueID) {
    res.redirect('/redirects');
  };

  session = req.session
  // if (req.body.username == 'admin' && req.body.password == 'admin') {
  session.uniqueID = req.body.username;
  // };
  res.redirect('/redirects');
});

app.get('/redirects', function (req, res) {
  session = req.session;
  if (session.uniqueID == 'admin') {
    // console.log(session.uniqueID);
    res.redirect('/admin');
  } else {
    res.send(req.session.uniqueID + ' not founda <a href="/logout">KILL Session</a>')
  }
});

app.get('/admin', function (req, res) {
  session = req.session;
  // // biar gk bisa link /admin tanpa login
  if (session.uniqueID != 'admin') {
    res.send(`Akses dilarang !! <a href="/logout">Login disini</a>`);

  } else {
    res.send(`Welcome ${req.session.uniqueID} !!<a href="/logout">KILL Session</a>`);
  }
});

app.get('/logout', function (req, res) {
  req.session.destroy();
  res.redirect('/login');
});

// supaya bisa jalan
app.listen(7777, function () {
  console.log('Listening at Port 7777');
});