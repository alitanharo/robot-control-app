
const start = (robotController, isRunning) => {
    if (robotController) {
        robotController.start();
        isRunning = true;
    } else {
        console.log('Robot controller not initialized.');
    }
}

module.exports = start;
