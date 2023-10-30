const robotControllerConstructor = require('./robotController/initializeRobotController');
const newCommand = require('./robotController/addNewCommand');
const continues = require('./robotController/continueRobot');
const robotConstructor = require('./robot/initializeRobot');
const roomConstructor = require('./room/initializeRoom');
const history = require('./robotController/showHistory');
const start = require('./robotController/startRobot');
const stop = require('./robotController/stopRobot');



module.exports = {
    roomConstructor,
    robotConstructor,
    robotControllerConstructor,
    start,
    stop,
    continues,
    newCommand,
    history
};
