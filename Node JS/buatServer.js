let http = require('http');
// server.createServer(engine).listen(7777);

let server = http.createServer(engine);
server.listen(7777, () => {
  console.log('Server was hit by a request');
});


function engine(request, response) {

  // response.writeHead([statusCode],{}[])
  response.writeHead(200, {
    'Content-Type': 'text/plain',
    'header': 'coba header'
  });

  response.end('Hello server world, request from ' + request.url);

  // console.log(response);
}