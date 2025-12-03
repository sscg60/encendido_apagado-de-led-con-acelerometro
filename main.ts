input.onGesture(Gesture.TiltRight, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
})
