let express = require('express');
let app = express();
let router = express.Router();

// // http://localhost:7777/myfirstroute/
// app.use('/myFirstRoute', router);

// // http://localhost:7777/myfirstroute/heyThereFirstRouter
// router.get('/heyThereFirstRouter', function (req, res) {
//   res.end('What\'s going on there?')
// })

// // http://localhost:7777/myfirstroute/heyThereFirstRouterAgain
// router.get('/heyThereFirstRouterAgain', function (req, res) {
//   res.end('What\'s going on there, this is a bit different! ')
// })



app.use('/users', router);

// (\\w+) ==> supaya hanya huruf / angka di url
router.get('/:username(\\w+)', function (req, res) {
  res.end(JSON.stringify(req.params));
})

app.listen(7777, function () {
  console.log('I\'m listening');
})