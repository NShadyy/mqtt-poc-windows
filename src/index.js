const mqtt = require('mqtt');

const {
  CLIENT_ID,
  MQTT_BROKER_ADDRESS,
  SUBSCRIPTION_TOPIC,
  PUBLICATION_TOPIC,
  QOS,
} = require('./config');

const CLIENT = mqtt.connect(MQTT_BROKER_ADDRESS, {
  clientId: CLIENT_ID,
});

CLIENT.on('connect', function () {
  console.log(`Connected: ${CLIENT.connected}`);

  CLIENT.subscribe(SUBSCRIPTION_TOPIC, { qos: QOS }, function (error) {
    if (error) {
      console.log(`Could Not Subscribe To "${SUBSCRIPTION_TOPIC}": ${error.message}`);
    } else {
      console.log(`Subscribed To "${SUBSCRIPTION_TOPIC}"`);
    }
  });

  CLIENT.subscribe(PUBLICATION_TOPIC, { qos: QOS }, function (error) {
    if (error) {
      console.log(`Could Not Subscribe To "${PUBLICATION_TOPIC}": ${error.message}`);
    } else {
      console.log(`Subscribed To "${PUBLICATION_TOPIC}"`);

      CLIENT.publish(PUBLICATION_TOPIC, 'testPublication', function (error) {
        if (error) {
          console.log(`Could Not Publish To "${PUBLICATION_TOPIC}": ${error.message}`);
        } else {
          console.log(`Published To "${PUBLICATION_TOPIC}"`);
        }
      });
    }
  });
});

CLIENT.on('error', function (error) {
  console.log(`Error: ${error.message}`);
});

CLIENT.on('message', function (topic, message) {
  console.log(`Received A Message =>> Topic: ${topic}, Message: ${message.toString()}`);
});
