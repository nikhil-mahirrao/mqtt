// Subscriber A
var mqtt = require("mqtt");

// Connect Subscriber A to the broker
var subscriberA = mqtt.connect("mqtt://localhost:1200");

// Topic
var hallTopic = "home/hall/#";

// On connect to broker
subscriberA.on("connect", () => {
  console.log('Subscriber A is connected to Broker');

  // Subscribe to the topics
  subscriberA.subscribe(hallTopic);
});

// Listen to subscribe topics
subscriberA.on("message", (topic, message) => {
  console.log('Recieve: ', topic, message.toString());
});