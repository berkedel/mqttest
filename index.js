var http = require('http'),
    httpServ = http.createServer(),
    mosca = require('mosca'),
    mqttServ = new mosca.Server({});

mqttServ.attachHttpServer(httpServ);

httpServ.listen(process.env.PORT || 8080);
