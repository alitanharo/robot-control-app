class RobotController {
    constructor(robot, room, startingPosition, commands) {
        this.robot = robot;
        this.room = room;
        this.startingPosition = startingPosition;
        this.commands = commands;
        this.delay = 1000;
        this.intervalId = null;
        this.paths = [];
        this.backup = [];
        this.resultsHistory = [];
        this.result = '';
    }

    start() {
        if (this.commands.length > 0) {
            this.robot.setRoom(this.room);
            this.setupRobotToMove();
            this.robot.move();
            this.handleBackup();
            this.executePathWithDelay(this.delay);
        } else {
            this.robot.isMoving = false;
            console.log('No commands available. Press "n + Enter" to entering new commands.');
        }
    }

    setupRobotToMove() {
        if (!this.robot.isMoving) {
            this.robot.setStartingPosition(this.startingPosition);
            this.robot.setCommands(this.commands);
            this.robot.isMoving = true;
        } else {
            console.log('Robot is moving and not able to execute this command!');
        }
    }

    handleBackup() {
        let pathStoreCopy = this.getRobotPathStoreCopy();
        this.setBackUp(pathStoreCopy)
    }

    stop() {
        if (this.robot.isMoving) {
            this.robot.isMoving = false;
            let pathStoreCopy = this.getRobotPathStoreCopy();
            let firstIndex = this.paths.length;
            let lastIndex = this.commands.length - 1;
            let executedPaths = pathStoreCopy.splice(firstIndex, lastIndex)
            this.updateBackUp(executedPaths)
        } else {
            console.log('Robot already stopped!');
        }
    }

    executePathWithDelay(ms) {
        let currentPaths = this.backup;
        let currentIndex = 0;
        const intervalId = setInterval(() => {
            if (currentIndex < currentPaths.length) {
                if (this.robot.isMoving) {
                    let currentPath = currentPaths[currentIndex];
                    console.log(currentPath);
                    this.paths.push(currentPath);
                    currentIndex++;
                } else {
                    clearInterval(intervalId);
                    console.log(`Robot stop at ==>    ${JSON.stringify(this.paths[this.paths.length - 1])} `);
                    console.log('press "C + Enter" to continue ')
                }
            } else {
                clearInterval(intervalId);
                this.robot.isMoving = false;
                let currentPath = this.paths[this.paths.length - 1]
                this.result = `(${currentPath.x} ${currentPath.y} ${currentPath.direction} )`
                this.resultsHistory.push(this.result);
                console.log(`Final Result: ${this.result}`);
                console.log('For entering new commands, press "n + Enter".');
                console.log('Key Options: "h":help, "s": stop, "c": continue, "r": history, "n": new command,  "e": exit`.');
                this.backup = [];
                this.robot.resetPathStore();
                this.startingPosition = { x: currentPath.x, y: currentPath.y }
                this.robot.setDirection(currentPath.direction);
            }
        }, ms);
    }

    continue() {
        if (!this.robot.isMoving) {
            if (this.commands.length > this.backup.length && this.backup.length) {
                this.robot.isMoving = true;
                this.executePathWithDelay(this.delay)
            } else {
                console.log('No commands left to continue. Press "n + Enter" to enter new commands.');
            }
        } else {
            console.log('The robot is currently in motion.');
        }
    }

    runNextCommand(newCommand) {
        if (newCommand.length && this.paths.length && !this.robot.isMoving) {
            this.commands = newCommand;
            this.paths = [];
            this.start()
        } else {
            console.log('Enter a new set of commands.');
        }
    }

    setBackUp(copy) {
        this.backup = copy;
    }

    updateBackUp(updeatedBackup) {
        this.backup = updeatedBackup;
    }

    getRobotPathStoreCopy() {
        return this.robot.getPathStoreCopy();
    }

}

module.exports = RobotController;



