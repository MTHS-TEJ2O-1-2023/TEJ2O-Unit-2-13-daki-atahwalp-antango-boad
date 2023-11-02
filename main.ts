/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Daki A.B
 * Created on: Oct 2023
 * This program counts down from 4 with neopixels
*/

// variables
let neopixelStrip: neopixel.Strip = null
let countDown: number = 4

// start up
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

// on button A, counting down
input.onButtonPressed(Button.A, function () {
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Purple))
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Purple))
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Purple))
  neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Purple))
  neopixelStrip.show()

  while (countDown > -1) {
    basic.showNumber(countDown)
    countDown--
    // counting down with neopixel
    neopixelStrip.setPixelColor(countDown, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
  }
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.show()
})

// on button B, clearing screen
input.onButtonPressed(Button.B, function () {
  basic.clearScreen()
  basic.showIcon(IconNames.Happy)
})
