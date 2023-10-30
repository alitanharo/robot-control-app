
const newCommand = (commands, robot, robotController) => {
    if (robot.isValidCommandString(commands)) {
        robotController.runNextCommand(commands)
    } else {
        console.error('Invalid command string. Please provide valid commands.');
        newCommand()
    }
}



module.exports = newCommand;
