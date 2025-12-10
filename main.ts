basic.forever(function () {
    basic.pause(2000)
    serial.writeValue("Temp", dht11.dht11value(dht11.DHT11Type.TemperatureC, DigitalPin.P0))
    basic.pause(2000)
    serial.writeValue("Hum", dht11.dht11value(dht11.DHT11Type.Humidity, DigitalPin.P0))
})
