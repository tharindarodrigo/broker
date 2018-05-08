var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://192.168.8.100')
client.on('connect', function () {
    client.subscribe('google_iobike/common')
})
client.on('message', function (topic, message) {
    context = message.toString();
    console.log(context)
})