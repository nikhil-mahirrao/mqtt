// Hall
var mqtt = require("mqtt");

// Topic
var temperatureTopic = "home/hall/temp";
var lightTopic = "home/hall/light";

// Last will and testament
var will = { 
  topic: temperatureTopic,
  payload: 'Something went wrong with Hall'
};

// Connect Hall to the broker
var hall = mqtt.connect("mqtt://localhost:1200", { will });

// On connect to broker
hall.on("connect", () => {
  console.log('Hall is connected to Broker');

  publishTemperature();
  setTimeout(publishLight, 2000);
});

// Publish temperature message
function publishTemperature() {
  setInterval(() => {
    var message = 'Hall: Tempreture 35°C';
    console.log('Publish: ', message);
    hall.publish(temperatureTopic, message);
  }, 4000);
}

// Publish light message
function publishLight() {
  setInterval(() => {
    var message = 'Hall: Light 50 lux';
    console.log('Publish: ', message);
    hall.publish(lightTopic, message);
  }, 4000);
}