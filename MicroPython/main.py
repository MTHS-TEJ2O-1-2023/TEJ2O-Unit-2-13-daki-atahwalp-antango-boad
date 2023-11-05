"""
Created by: Daki A.B
Created on: Nov 3
This module is a Micro:bit MicroPython program that counts down from 4 
"""

from microbit import *
import neopixel

np = neopixel.NeoPixel(pin16, 4)
count_down = 4

display.clear()
print(np[0])
np[0] = (0, 0, 0)
print(np[1])
np[1] = (0, 0, 0)
print(np[2])
np[2] = (0, 0, 0)
print(np[3])
np[3] = (0, 0, 0)
np.show()
display.show(Image.HAPPY)

if button_a.is_pressed():
    display.clear()
    print(np[0])
    np[0] = (128, 0, 128)
    print(np[1])
    np[1] = (128, 0, 128)
    print(np[2])
    np[2] = (128, 0, 128)
    print(np[3])
    np[3] = (128, 0, 128)
    np.show()

while count_down > -1:
    display.show(count_down)
    count_down -= 1
    np[count_down] = (0, 0, 0)
    np.show()
