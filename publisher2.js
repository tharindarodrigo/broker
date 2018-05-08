var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://192.168.8.100');
client.on('connect', function () {
    var v = 6;
    setInterval(function () {
        // v++
        // if(v==10) {
        //     v=6
        // }
        var a = Math.random()
        var x1 = null
        if (a < 0.25) {
            x1 = {"lap": "1"}


        } else if (a < 0.5) {
            x1 = {"lap": "2"}


        } else if (a < 0.75) {
            x1 = {"lap": "3"}

        } else {
            x1 = {"lap": "4"}
        }

        x1 = JSON.stringify(x1)
        client.publish('google_iobike/common', x1)


        console.log(x1)
    }, 500);
})
