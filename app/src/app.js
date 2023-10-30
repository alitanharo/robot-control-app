const { roomConstructor, robotConstructor, robotControllerConstructor, start, stop, continues, newCommand, history } = require('./modules/index');

const RobotApp = {
    robot: null,
    room: null,
    robotController: null,
    isRunning: false,


    initializeRoom(shape, size, origin, radius) {
        this.room = roomConstructor(shape, size, origin, radius);
    },
    initializeRobot(language) {
        this.robot = robotConstructor(language);
    },
    initializeRobotController(startingPosition, commands) {
        this.robotController = robotControllerConstructor(this.robot, this.room, startingPosition, commands);
    },

    startRobot() {
        start(this.robotController, this.isRunning)
    },

    stopRobot() {
        stop(this.robotController, this.isRunning)
    },

    continueRobot() {
        continues(this.robotController, this.isRunning)
    },

    addNewCommand(commands) {
        newCommand(commands, this.robot, this.robotController)
    },

    showHistory() {
        history(this.robotController)
    }
};

module.exports = RobotApp;