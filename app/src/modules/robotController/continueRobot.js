
const continues = (robotController, isRunning) => {
    if (!isRunning && !robotController.robot.isMoving) {
        robotController.continue();

    } else {

        console.log('Robot is Moving.');
    }
}

module.exports = continues;
