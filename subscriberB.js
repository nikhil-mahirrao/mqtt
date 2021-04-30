// Subscriber B
var mqtt = require("mqtt");

// Connect Subscriber B to the broker
var subscriberB = mqtt.connect("mqtt://localhost:1200");

// Topic
var tempTopic = "home/+/temp";

// On connect to broker
subscriberB.on("connect", () => {
  console.log('Subscriber B is connected to Broker');

  // Subscribe to the topics
  subscriberB.subscribe(tempTopic);
});

// Listen to subscribe topics
subscriberB.on("message", (topic, message) => {
  console.log('Recieve: ', topic, message.toString());
});