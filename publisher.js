var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://192.168.8.100');
client.on('connect', function () {
    var v = 6;
    setInterval(function () {
        // v++
        // if(v==10) {
        //     v=6
        // }

        var x1 = {"id":"1","rev":Math.random()*10,"duration":"500"}
        x1 = JSON.stringify(x1)

        client.publish('google_iobike/common', x1)
        
        var x2 = {"id":"2","rev":Math.random()*10,"duration":"500"}
        x2 = JSON.stringify(x2)
        client.publish('google_iobike/common', x2)
       
        
        var x3 = {"id":"3","rev":Math.random()*10,"duration":"500"}
        x3 = JSON.stringify(x3)
        client.publish('google_iobike/common', x3)
        
        var x4 = {"id":"4","rev":Math.random()*10,"duration":"500"}
        x4 = JSON.stringify(x4)
        client.publish('google_iobike/common', x4)

        // client.publish('myTopic', x.toString())
        
        
        console.log(x1)
    }, 500);
});