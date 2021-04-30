// Mosca MQTT broker
var mosca = require("mosca");

// Config for mosca broker
var settings = { port: 1200 };

// Init new mosca broker
var broker = new mosca.Server(settings);

// On broker is Ready
broker.on("ready", () => {
  console.log("Broker is ready!");
});

// On broker recieve packet 
broker.on("published", (packet) => {
  message = packet.payload.toString();
  console.log(message);
});