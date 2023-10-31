/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Daki A.B
 * Created on: Oct 2023
 * This program counts down
*/

// variables
let countDown : number = 4
let neopixelStrip : neopixel.Strip = null

// start up
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  while (countDown > -1) {
    basic.showNumber(countDown)
    countDown --
}

})

// on button B, clearing screen
input.onButtonPressed(Button.B, function () {
  basic.clearScreen()
  basic.showIcon(IconNames.Happy)
})
