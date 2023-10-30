const { robotControllerConstructor } = require('../../src/modules/index');
const Robot  = require('../../src/classes/robot');
const RobotController = require('../../src/classes/robotController');
const Room = require('../../src/classes/room');



describe('robotControllerConstructor Module', () => {
    it('should create a RobotController instance with the specified robot, room, and startingPosition', () => {
        const mockRobot = new Robot();
        const mockRoom = new Room('square', { x: 5, y: 5 }, 'center');
        const startingPosition = { x: 0, y: 0 };
        const robotController = robotControllerConstructor(mockRobot, mockRoom, startingPosition, 'VGGHGHGHGG');
        expect(robotController).toBeInstanceOf(RobotController);
        expect(robotController.robot).toBe(mockRobot);
        expect(robotController.room).toBe(mockRoom);
        expect(robotController.startingPosition).toEqual(startingPosition);
    });
});




