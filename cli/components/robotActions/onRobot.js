const { startRobot } = require('../../../app/index')


function onRobot(rl, controlOptionsCLI) {
    rl.question('Are you ready to start the robot? (Y/N): ', (start) => {
        start = start.toLowerCase();
        if (start === 'y' || start === 'yes') {
            console.log('Robot is moving. Press "s + Enter" to stop or "c+ Enter" to continue.');
            startRobot()
            rl.on('line', (input) => controlOptionsCLI(input));
        } else {
            console.log('Robot not started.');
            rl.question('Do you want to close the app? (Y/N):', (answer) => {
                if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
                    rl.close();
                } else {
                    console.log('Press "n + Enter" to entering new command.');
                }
            });
        }
    });
}

module.exports = onRobot;
