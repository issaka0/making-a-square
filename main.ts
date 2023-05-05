DFRobotMaqueenPlusV2.init()
basic.forever(function () {
    DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eForward, 100)
    basic.pause(1000)
    DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, 100)
    DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eBackward, 100)
    basic.pause(500)
})
