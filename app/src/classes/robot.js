class Robot {
    constructor(language = 'Swedish') {
        this.language = language;
        this.room = null;
        this.x = 0;
        this.y = 0;
        this.direction = 'N';
        this.commandString = '';
        this.robotSize = 2;
        this.isMoving = false;
        this.state = {
            x: 0,
            y: 0,
            direction: 'N',
            commands: ''
        };
        this.pathStore = [];
        this.commandMappings = language === 'Swedish' ?
            { 'V': 'L', 'H': 'R', 'G': 'F' } :
            { 'L': 'L', 'R': 'R', 'F': 'F' };
    }

    setRoom(room) {
        if (room) this.room = room;
    }

    setStartingPosition(position) {
        if (!this.isMoving) {
            this.x = position.x;
            this.y = position.y;
            this.updateState(position)
        }
    }

    setCommands(commands) {
        if (!this.isMoving) {
            this.commandString = commands.split('').map(command => this.commandMappings[command]).join('');
        }
    }

    setDirection(newDirection) {
        this.direction = newDirection;
    }

    move() {
        for (const command of this.commandString) {
            if (this.isMoving) {
                this.processCommand(command);
                let currentState = {
                    x: this.x,
                    y: this.y,
                    direction: this.direction,
                    commands: this.commandString
                };
                this.updateState(currentState);
                this.initializePathStore({ ...this.state });
                this.commandString = this.commandString.substring(1);
            } else {
                console.log('Robot stopped!');
                break;
            }
        }
    }

    processCommand(command) {
        switch (command) {

            case 'L':
                this.turnLeft();
                break;
            case 'R':
                this.turnRight();
                break;
            case 'F':
                this.moveForward();
                break;
            default:
                throw new Error(`Invalid command: ${command}`);
        }
    }

    turnLeft() {
        const directions = ['N', 'V', 'S', 'Ö'];
        this.direction = directions[(directions.indexOf(this.direction) + 1) % 4];
    }

    turnRight() {
        const directions = ['N', 'Ö', 'S', 'V'];
        this.direction = directions[(directions.indexOf(this.direction) + 1) % 4];
    }

    moveForward() {
        if (this.room) {
            const newPosition = { x: this.x, y: this.y };
            switch (this.direction) {
                case 'N':
                    if (Math.abs(newPosition.y) < this.room.wall.y) newPosition.y++;
                    break;
                case 'Ö':
                    if (Math.abs(newPosition.x) < this.room.wall.x) newPosition.x++;
                    break;
                case 'S':
                    if (Math.abs(newPosition.y) < this.room.wall.y) newPosition.y--;
                    break;
                case 'V':
                    if (Math.abs(newPosition.x) < this.room.wall.x) newPosition.x--;
                    break;
            }

            if (this.room.isInside(newPosition.x, newPosition.y)) {
                this.x = newPosition.x;
                this.y = newPosition.y;
            }
        }
    }

    report() {
        return `${this.x} ${this.y + this.robotSize} ${this.direction}`;
    }

    isValidCommandString(commands) {
        if (this.language === 'Swedish') {
            return /^[VHG]+$/.test(commands);
        } else if (this.language === 'English') {
            return /^[LRF]+$/.test(commands);
        }
        return false;
    }
    updateState(newState) {
        const { x, y, direction } = newState;
        this.state.x = x;
        this.state.y = y + this.robotSize;
        this.state.direction = direction ? direction : 'N';
        this.state.commands = (this.commandString && this.commandString.length > 1) ? this.commandString : '';

    };

    initializePathStore(updatedState) {
        this.pathStore.push(updatedState);
    }

    updatePathStore(updatedPathStore) {
        this.pathStore = updatedPathStore;
    }

    resetPathStore() {
        this.pathStore = [];
    }

    getPathStoreCopy() {
        return [...this.pathStore];
    }
}



module.exports = Robot;