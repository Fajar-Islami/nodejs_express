var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();

// file css
app.use('/cssFiles', express.static(__dirname + '/assets'))

// file halaman index
app.get('/', function (req, res) {
  // mengirim file ke halaman /
  res.sendFile('index.html', {
    root: path.join(__dirname, './HTML Server')
  })
});

// akses file/ halaman lain
app.get(/^(.+)$/, function (req, res) {
  // setiap file yang dimulai dari 1 atau banyak karakter

  // jika file ada
  try {
    // mengecek apakah file ada di dalam folder html server
    // console.log((path.join(__dirname, './HTML Server/', req.params[0] + '.html')));
    if (fs.statSync(path.join(__dirname, './HTML Server/', req.params[0] + '.html')).isFile()) {
      res.sendFile(req.params[0] + '.html', {
        root: path.join(__dirname, './HTML Server')
      });
    }
  }

  // jika tidak ada
  catch (err) {
    console.log(err);
    res.sendFile('404.html', {
      root: path.join(__dirname, './HTML Server')
    })
  }
})

// supaya bisa jalan
app.listen(7777, function () {
  console.log('Listening at Port 7777');
});