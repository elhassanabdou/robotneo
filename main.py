# Initialize the NeoPixel strip
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
strip.set_brightness(255)
strip.show_rainbow(1, 360)

# Rotate the NeoPixel strip colors
def on_every_interval():
    strip.rotate(1)
    strip.show()

loops.every_interval(500, on_every_interval)

# Main logic for the Maqueen robot's motor control
def on_forever():
    left_patrol = maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT)
    right_patrol = maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT)

    if left_patrol == 0 and right_patrol == 0:
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 50)
    elif left_patrol == 0 and right_patrol == 1:
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 50)
        maqueen.motor_stop(maqueen.Motors.M1)
    elif left_patrol == 1 and right_patrol == 0:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motor_stop(maqueen.Motors.M2)
    elif left_patrol == 1 and right_patrol == 1:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motor_stop(maqueen.Motors.M2)
    else:
        maqueen.motor_stop(maqueen.Motors.ALL)

basic.forever(on_forever)
