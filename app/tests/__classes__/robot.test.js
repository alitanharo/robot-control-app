const Robot = require('../../src/classes/robot');



describe('Robot Class', () => {
    let robot;

    beforeEach(() => {
        robot = new Robot();
    });

    it('should create a Robot with default settings', () => {
        expect(robot.language).toBe('Swedish');
        expect(robot.x).toBe(0);
        expect(robot.y).toBe(0);
        expect(robot.direction).toBe('N');
        expect(robot.commandString).toBe('');
    });

    it('should set the room for the Robot', () => {
        const room = { wall: { x: 5, y: 5 } };
        robot.setRoom(room);
        expect(robot.room).toBe(room);
    });

    it('should set the starting position of the Robot', () => {
        const startPosition = { x: 2, y: 3 };
        robot.setStartingPosition(startPosition);
        expect(robot.x).toBe(startPosition.x);
        expect(robot.y).toBe(startPosition.y);
    });

    it('should set the commands for the Robot', () => {
        const commands = 'VGGHGHGHGG';
        robot.setCommands(commands);
        expect(robot.commandString).toBe('LFFRFRFRFF');
    });

    it('should turn left', () => {
        robot.turnLeft();
        expect(robot.direction).toBe('V');
    });

    it('should turn right', () => {
        robot.turnRight();
        expect(robot.direction).toBe('Ö');
    });

 
    it('should report the current position and direction', () => {
        const startPosition = { x: 2, y: 3 };
        robot.setStartingPosition(startPosition);
        robot.turnRight();
        const report = robot.report();
        expect(report).toBe('2 5 Ö');
    });

    it('should validate a command string', () => {
        const validCommands = 'VGGHGHGHGG';
        const invalidCommands = 'XYZ';
        const valid = robot.isValidCommandString(validCommands);
        const invalid = robot.isValidCommandString(invalidCommands);
        expect(valid).toBe(true);
        expect(invalid).toBe(false);
    });

    it('should initialize, update, and get the path store', () => {
        const pathStore = [{ x: 0, y: 0, direction: 'N' }, { x: 1, y: 1, direction: 'V' }];
        robot.initializePathStore(pathStore[0]);
        robot.updatePathStore(pathStore);
        const pathCopy = robot.getPathStoreCopy();
        expect(pathCopy).toEqual(pathStore);
    });
});
