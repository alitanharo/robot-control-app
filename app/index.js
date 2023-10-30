const RobotApp = require('./src/app')



module.exports = {
    initializeRobot: RobotApp.initializeRobot,
    initializeRoom: RobotApp.initializeRoom,
    initializeRobotController: RobotApp.initializeRobotController,
    startRobot: RobotApp.startRobot,
    stopRobot: RobotApp.stopRobot,
    continueRobot: RobotApp.continueRobot,
    addNewCommand: RobotApp.addNewCommand,
    showHistory: RobotApp.showHistory
};
