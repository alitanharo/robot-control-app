class CLIApp {
    constructor(rl, components) {
        this.rl = rl;
        this.components = components;
        
    }

    startCLI() {
        this.components.showHelp();
        this.components.welcomeMessage();
        this.components.chooseLanguage(this.rl, this.components.languageOptions, this.setupRoomCLI.bind(this), this.components.showErrorAndContinue);
    }

    setupRoomCLI() {
        this.components.setupRoom(this.rl, this.components.shapeOptions, this.setupRoomDetailsCLI.bind(this), this.components.showErrorAndContinue);
    }

    setupRoomDetailsCLI(shape) {
        this.components.setupRoomDetails(shape, this.rl, this.components.showErrorAndContinue, this.getStartingPositionCLI.bind(this));
    }

    getStartingPositionCLI() {
        this.components.getStartingPosition(this.rl, this.getCommandStringCLI.bind(this), this.components.showErrorAndContinue);
    }

    getCommandStringCLI() {
        this.components.getCommandString(this.rl, this.onRobotCLI.bind(this), this.components.showErrorAndContinue);
    }

    onRobotCLI() {
        this.components.onRobot(this.rl, this.controlOptionsCLI.bind(this));
    }

    nextCommandCLI() {
        this.components.nextCommand(this.rl, this.components.showErrorAndContinue);
    }

    controlOptionsCLI(input) {
        this.components.controlOptions(input, this.rl, this.nextCommandCLI.bind(this));
    }
}

module.exports = CLIApp;
