# MQTT Broker Demo

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://dashboard.heroku.com/new?button-url=https://github.com/berkedel/mqttest/tree/master&template=https://github.com/berkedel/mqttest/tree/master)

This is a MQTT broker demo using [aedes](https://github.com/moscajs/aedes) module. This sample is ready to deploy to [Heroku](https://dashboard.heroku.com/). This code will run HTTP server with MQTT-over-websocket capabilities. So, you need to replace `mqtt://` protocol with `ws://` one.

To test if it works, try this code below.

```js
const mqtt = require("mqtt");
const client = mqtt.connect('ws://YOUR-APP-INSERT-HERE.herokuapp.com');

client.on("connect", () => {
  client.subscribe("presence", (err) => {
    if (!err) {
      client.publish("presence", "Hello mqtt");
    }
  });
});

client.on("message", (topic, message) => {
  // message is Buffer
  console.log(message.toString());
  client.end();
});
```
