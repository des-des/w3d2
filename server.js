var server = (function() {
  var handler = function(request, response) {
    var result;
    if (request && request.url) {
      if (request.url.length === 1) {
        response.writeHead(200, {"Content-Type": "text/html"});
  	    response.end("HELLO WORLD!");
      } else {
        response.writeHead(200, {"Content-Type": "text/html"});
  	    response.end(request.url.split('/')[2]);
      }
    }
  };


  return {
    handler: handler,
  }
}());

module.exports = server;
