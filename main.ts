input.onPinPressed(TouchPin.P0, function () {
    index_2 = 0
    index = 4
    for (let index2 = 0; index2 < 5; index2++) {
        led.plot(index, index_2)
        index += -1
        index_2 += 1
        basic.pause(500)
    }
})
input.onButtonPressed(Button.A, function () {
    counter = 5
    while (counter >= 0) {
        basic.showNumber(counter)
        basic.pause(200)
        counter += -1
    }
    music.playMelody("C5 C5 G D G G D C ", 120)
})
input.onPinPressed(TouchPin.P1, function () {
    while (input.lightLevel() < 128) {
        basic.showIcon(IconNames.Sad)
        music.playTone(131, music.beat(BeatFraction.Double))
    }
    while (input.lightLevel() > 128) {
        basic.showIcon(IconNames.Happy)
        music.playTone(262, music.beat(BeatFraction.Double))
    }
})
let counter = 0
let index = 0
let index_2 = 0
let sprite = game.createSprite(1, 3)
basic.forever(function () {
    while (input.buttonIsPressed(Button.B)) {
        sprite.move(2)
        basic.pause(100)
        sprite.turn(Direction.Left, 90)
        basic.pause(100)
    }
})
