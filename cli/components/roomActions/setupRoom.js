const chalk = require('chalk');


function setupRoom(rl, shapeOptions, setupRoomDetailsCLI, showErrorAndContinue) {
    console.log(chalk.bold.blue('Setting Up Your Room'));
    const roomShapeQuestion = 'Choose a room shape (S/C for square/circular): ';
    const askRoomShape = () => {
        rl.question(roomShapeQuestion, (shape) => {
            const chosenShape = shape.toLowerCase();
            if (shapeOptions[chosenShape]) {
                console.log(chalk.green(`Room shape is set to ${shapeOptions[chosenShape]}.`));
                setupRoomDetailsCLI(shapeOptions[chosenShape]);
            } else {
                showErrorAndContinue(chalk.red('Invalid room shape. Please choose S for square or C for circular.'), askRoomShape);
            }
        });
    };

    askRoomShape();
}

module.exports = setupRoom;
