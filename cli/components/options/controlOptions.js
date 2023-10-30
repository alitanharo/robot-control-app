const { stopRobot, continueRobot, showHistory } = require('../../../app/index');
const { showHelp } = require('../common/cliCommon')


function controlOptions(input, rl, nextCommandCLI) {
    input = input.toLowerCase();

    switch (input) {
        case 's':
        case 'stop':
            stopRobot();
            break;

        case 'c':
        case 'continue':
            continueRobot();
            break;

        case 'n':
        case 'new command':
            nextCommandCLI();
            break;

        case 'r':
        case 'history':
            showHistory();
            break;
        case 'h':
        case 'help':
            showHelp();
            break;

        case 'e':
            rl.close();
            break;

        default:
            console.log(`Key Options:"h":help, "s": stop, "c": continue, "r": history, "n": new command,  "e": exit`);
            break;
    }
}

module.exports = controlOptions;
