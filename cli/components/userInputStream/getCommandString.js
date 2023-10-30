const { initializeRobotController } = require('../../../app/index')

function getCommandString(rl, onRobotCLI, showErrorAndContinue) {
   rl.question('Enter the command for the robot: ', (commandString) => {
        const uppercaseCommand = commandString.toUpperCase();
        if (robot.isValidCommandString(uppercaseCommand)) {
            initializeRobotController(currentPosition, uppercaseCommand);
            console.log('The Robot Controller is set!');
            console.log('Cool, Now the Robot is ready to move in the Room!');
            console.log(`Robot will finish your command in ${uppercaseCommand.length * (robotController.delay / 1000)} seconds.`);
            onRobotCLI();
        } else {
            showErrorAndContinue('Invalid command string. Please provide valid commands.',
             () => getCommandString(rl, onRobotCLI, showErrorAndContinue));
        }
    });
}

module.exports = getCommandString;