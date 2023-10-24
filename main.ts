let antalRyst = 0
input.onGesture(Gesture.Shake, function () {
    antalRyst += 1
})
input.onButtonPressed(Button.A, function () {
    antalRyst = 0
    basic.showNumber(antalRyst)
})
loops.everyInterval(1000, function () {
    basic.showNumber(antalRyst)
})
