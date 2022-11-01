var http = require('http');
var handleRequest = function(request, response) {
  response.writeHead(200);
  //Second Comment is v2.0. Cloud Build in Action!!
  response.end("<h1> Deployed Version is v1.0.</h1>");
}
var www = http.createServer(handleRequest);
www.listen(8080);
