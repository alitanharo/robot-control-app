
const { addNewCommand } = require('../../../app/index')


function nextCommand(rl,showErrorAndContinue) {
    if (!robot.isMoving) {
        console.log('Enter a new command:');
        rl.question('New command: ', (newCommandString) => {
            if (robot.isValidCommandString(newCommandString.toUpperCase())) {
                addNewCommand(newCommandString.toUpperCase())
            }
            else {
                showErrorAndContinue('Invalid command string. Please provide valid commands.',
                 () => nextCommand(rl, showErrorAndContinue));
            }
        });
    } else {
        console.log("Robot is moving you should wait or press s to stop robot.");
    }
}

module.exports = nextCommand;