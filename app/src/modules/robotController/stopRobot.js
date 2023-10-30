
function stop(robotController, isRunning) {
    if (!isRunning) {
        robotController.stop();
        isRunning = false;

    } else {
        console.log('No, robot is currently running!');
    }
}

module.exports = stop;

