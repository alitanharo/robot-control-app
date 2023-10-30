const RobotController = require('../../classes/robotController')


const robotControllerConstructor = (robot, room, startingPosition, commands) => {
    if (!robot || !room) throw new Error('Robot or room not properly initialized.');
    return new RobotController(robot, room, startingPosition, commands);
}


module.exports = robotControllerConstructor;
