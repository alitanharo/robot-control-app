
function getStartingPosition(rl, getCommandStringCLI, showErrorAndContinue) {
   rl.question('Enter the starting position (e.g., 0 0): ', (position) => {
        const positionParts = position.split(' ');
        if (positionParts.length === 2 && !isNaN(positionParts[0]) && !isNaN(positionParts[1])) {
            currentPosition = { x: parseInt(positionParts[0]), y: parseInt(positionParts[1]) };
            if (!room.isInside(currentPosition.x, currentPosition.y)) {
                showErrorAndContinue('Invalid starting position: Outside the room.', getStartingPosition);
            }
            getCommandStringCLI();
        } else {
            showErrorAndContinue('Invalid starting position format. Please provide position as "x y."',
             () => getStartingPosition(rl, getCommandStringCLI, showErrorAndContinue));
        }
    });
}

module.exports= getStartingPosition;