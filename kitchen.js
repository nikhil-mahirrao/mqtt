// Kitchen
var mqtt = require("mqtt");

// Topic
var temperatureTopic = "home/kitchen/temp";
var lightTopic = "home/kitchen/light";

// Last will and testament
var will = { 
  topic: temperatureTopic,
  payload: 'Something went wrong with Kitchen'
};

// Connect Kitchen to the broker
var kitchen = mqtt.connect("mqtt://localhost:1200", { will });

// On connect to broker
kitchen.on("connect", () => {
  console.log('Kitchen is connected to Broker');

  publishTemperature();
  setTimeout(publishLight, 2000);
});

// Publish temperature message
function publishTemperature() {
  setInterval(() => {
    var message = 'Kitchen: Tempreture 32°C';
    console.log('Publish: ', message);
    kitchen.publish(temperatureTopic, message);
  }, 4000);
}

// Publish light message
function publishLight() {
  setInterval(() => {
    var message = 'Kitchen: Light 45 lux';
    console.log('Publish: ', message);
    kitchen.publish(lightTopic, message);
  }, 4000);
}