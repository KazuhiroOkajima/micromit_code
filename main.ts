basic.showArrow(ArrowNames.North)
basic.pause(1000)
maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
basic.pause(100)
maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
music.playMelody("C C C E F E D F ", 170)
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 20) {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
        basic.pause(500)
        basic.showArrow(ArrowNames.East)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        basic.pause(100)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.motorStop(maqueen.Motors.M1)
    } else {
        basic.showArrow(ArrowNames.North)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    }
})
