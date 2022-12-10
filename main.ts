let M = 0
basic.showString("d")
basic.forever(function () {
    M = input.lightLevel()
    basic.showNumber(M)
    if (M > 40) {
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
})
