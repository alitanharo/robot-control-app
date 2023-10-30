const chalk = require('chalk');
const { initializeRoom } = require('../../../app/index');

function setupRoomDetails(shape, rl, showErrorAndContinue, getStartingPositionCLI) {
    const roomInfo = {
        size: { x: 0, y: 0 },
        origin: 'center',
        radius: null,
    };

    console.log(chalk.bold.blue('Room Details Setup'));

    const askOriginPoint = () => {
        rl.question('Is the origin point of the room in the center? (Yes/No): ', (originPoint) => {
            const org = originPoint.toLowerCase();
            roomInfo.origin = org === 'yes' || org === 'y' ? 'center' : 'corner';

            const roomSizeQuestion = shape === 'square' ? 'Enter the room size (e.g., 5 5): ' : 'Enter the room radius (e.g., 10): ';

            rl.question(roomSizeQuestion, (roomSize) => {
                if (shape === 'square') {
                    const roomSizeParts = roomSize.split(' ');
                    if (roomSizeParts.length === 2 && !isNaN(roomSizeParts[0]) && !isNaN(roomSizeParts[1])) {
                        roomInfo.size.x = parseInt(roomSizeParts[0]);
                        roomInfo.size.y = parseInt(roomSizeParts[1]);
                    } else {
                        showErrorAndContinue(chalk.red('Invalid room size format. Please provide size as "x y".'), askOriginPoint);
                        return;
                    }
                } else if (shape === 'circular') {
                    if (!isNaN(roomSize)) {
                        roomInfo.radius = parseInt(roomSize);
                    } else {
                        showErrorAndContinue(chalk.red('Invalid room radius. Please provide a valid number.'), askOriginPoint);
                        return;
                    }
                }

                initializeRoom(shape, roomInfo.size, roomInfo.origin, roomInfo.radius);
                console.log(chalk.green('The Room is set'));
                getStartingPositionCLI();
            });
        });
    }

    askOriginPoint();
}

module.exports = setupRoomDetails;
