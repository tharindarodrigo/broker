// var mosca = require('mosca');
// var settings = {
//     port: 1883
// }

// var server = new mosca.Server(settings);

// server.on('ready', function () {
//     console.log("ready");
// });


var http     = require('http')
  , httpServ = http.createServer()
  , mosca    = require('mosca')
  , mqttServ = new mosca.Server({});

mqttServ.attachHttpServer(httpServ);

httpServ.listen(3000);