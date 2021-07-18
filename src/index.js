var mqtt = require('mqtt');

var topic_s = 'topic';
var topic_list = ['topic2', 'topic3', 'topic4'];
var client = mqtt.connect('mqtt://127.0.0.1:1883', {
  clientId: 'mqttjs01',
});

client.on('connect', function () {
  console.log('connected');
  console.log('connected flag  ' + client.connected);
});

client.on('error', function (error) {
  console.log("Can't connect" + error);
});

client.publish(topic_s, 'Hey there');

client.subscribe(topic_s, { qos: 1 });
client.subscribe(topic_list, { qos: 1 });

client.on('message', function (topic, message) {
  console.log('message is ' + message + ', topic is ' + topic);
});
