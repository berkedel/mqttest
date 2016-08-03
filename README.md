# MQTT Broker Demo

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://dashboard.heroku.com/new?button-url=https://github.com/berkedel/mqttest/tree/master&template=https://github.com/berkedel/mqttest/tree/master)

This is a MQTT broker demo using [mosca](https://github.com/mcollina/mosca) module.
This sample is ready to deploy to [Heroku](https://dashboard.heroku.com/).
This code will run HTTP server with MQTT-over-websocket capabilities.
So, you need to replace `mqtt://` protocol with `ws://` one. 

To test if it works, try this code below.
```
var mqtt    = require('mqtt');
var client  = mqtt.connect('ws://YOUR-APP-INSERT-HERE.herokuapp.com');

client.on('connect', function () {
  client.subscribe('presence');
  client.publish('presence', 'Hello mqtt');
});

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString());
  client.end();
});
```
