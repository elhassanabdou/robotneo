let distance = 0
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
basic.pause(400)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 220)
basic.pause(400)
maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 128)
basic.pause(400)
maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 128)
basic.pause(400)
let botLight = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
botLight.setPixelColor(0, neopixel.colors(NeoPixelColors.Indigo))
botLight.show()
basic.pause(400)
botLight.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
botLight.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
botLight.setPixelColor(3, neopixel.colors(NeoPixelColors.Violet))
pins.digitalWritePin(DigitalPin.P0, 1)
basic.pause(100)
pins.digitalWritePin(DigitalPin.P0, 0)
basic.pause(100)
pins.digitalWritePin(DigitalPin.P0, 1)
basic.pause(100)
pins.digitalWritePin(DigitalPin.P0, 0)
basic.pause(100)
while (true) {
    distance = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (distance < 20) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 200)
        basic.pause(400)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 200)
        basic.pause(200)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 200)
    }
    
}
