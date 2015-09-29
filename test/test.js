var Test = require('tape');
var Shot = require('shot');

var server = require('../server.js');

Test("check handler object exists", function(t){
  var expected, result;
  var expected = true;
  var result = (server && typeof server.handler === "function");
  t.equal(expected, result, "handler function exists");
  t.end();

});


Test("Test the server responds to a root call with status 200", function(t){
  var expected, result;
  Shot.inject(server.handler, {'method': 'GET', 'url' : '/'}, function(res) {
    var expected = 200;
    var result = res.statusCode;
    t.equal(result, expected, "Server init OK");
    t.end();
  });
});
//
// Test("Test the server responds to a root call with status 200", function(t){
//   var expected, result;
//   Shot.inject(server.handler, {'method': 'GET', 'url' : '/name/eoin'}, function(res) {
//     var payload = res.payload;
//     var expected = 'eoin';
//     var result = res.payload.;
//     console.log(res.payload);
//     t.equal(result, expected, "Server init OK");
//     t.end();
//   });
// });
