var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://mqtt.iot.ideamart.io')
var client2 = mqtt.connect('mqtt://192.168.8.105')
client.on('connect', function () {
    client.subscribe('google_iobike/common2')

})
client.on('message', function (topic, message) {
    context = message.toString();
    console.log(context)
    client2.publish('google_iobike/common', context)
})