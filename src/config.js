const config = require('config');

const MQTT_BROKER_ADDRESS = config.get('mqttBrokerAddress');
const CLIENT_ID = config.get('mqttClientId');
const SUBSCRIPTION_TOPIC = config.get('subscriptionTopic');
const PUBLICATION_TOPIC = config.get('publicationTopic');
const QOS = config.get('qos');

module.exports = {
  MQTT_BROKER_ADDRESS,
  CLIENT_ID,
  SUBSCRIPTION_TOPIC,
  PUBLICATION_TOPIC,
  QOS,
};
