const RobotController = require('../../src/classes/robotController');
const Robot = require('../../src/classes/robot');
const Room = require('../../src/classes/room');

describe('RobotController Class', () => {
    let robotController;
    let robot;
    let room;

    beforeEach(() => {
        robot = new Robot();
        room = new Room('square', { x: 5, y: 5 }, 'center', null);
        robotController = new RobotController(
            robot,
            room,
            { x: 1, y: 2 },
            'HGHGGHGHG'
        );
    });

    it('should start the robot movement', () => {
        robot.move = jest.fn();
        robotController.start();
        expect(robot.move).toHaveBeenCalled();
    });

    it('should handle backup when starting the robot', () => {
        robot.getPathStoreCopy = jest.fn().mockReturnValue([]);
        robotController.handleBackup();
        expect(robot.getPathStoreCopy).toHaveBeenCalled();
        expect(robotController.backup).toEqual([]);
    });

    it('should stop the robot', () => {
        robot.isMoving = true;
        robot.getPathStoreCopy = jest.fn().mockReturnValue([]);
        robot.updateBackUp = jest.fn();
        robotController.stop();
        expect(robot.isMoving).toBe(false);
        expect(robot.getPathStoreCopy).toHaveBeenCalled();
    });

    it('should not continue the robot when there are no commands left', () => {
        robot.isMoving = true;
        robot.commands = '';
        robotController.continue();
        expect(robot.isMoving).toBe(true);
    });
});

// describe('executePathWithDelay Function', () => {
//     let robotController;
//     let mockRobot;
//     let mockRoom;

//     beforeEach(() => {
//         mockRobot = {
//             isMoving: true,
//             resetPathStore: jest.fn(),
//             setDirection: jest.fn(),
//             setCommands: jest.fn(),
//             move: jest.fn(),
//             getPathStoreCopy: jest.fn().mockReturnValue([]),
//         };

//         mockRoom = {
//             shape: 'square',
//             size: { x: 5, y: 5 },
//             isInside: jest.fn(),
//         };

//         robotController = new RobotController(mockRobot, mockRoom, { x: 1, y: 2 }, 'HGHGGHGHG');
//     });

//     it('should continue the robot if it is not in motion and there are commands in backup', () => {
//         robotController.robot.isMoving = false;
//         robotController.backup = ['F', 'R', 'L'];
//         const executePathWithDelayMock = jest.spyOn(robotController, 'executePathWithDelay');
//         robotController.continue();
//         expect(robotController.robot.isMoving).toBe(true);
//         expect(executePathWithDelayMock).toHaveBeenCalledWith(robotController.delay);
//     });

//     it('should not continue the robot if it is already in motion', () => {
//         robotController.robot.isMoving = true;
//         const executePathWithDelayMock = jest.spyOn(robotController, 'executePathWithDelay');
//         robotController.continue();
//         expect(robotController.robot.isMoving).toBe(true);
//         expect(executePathWithDelayMock).not.toHaveBeenCalled();
//     });

//     it('should not continue the robot if there are no commands in backup', () => {
//         robotController.robot.isMoving = false;
//         robotController.backup = [];
//         const executePathWithDelayMock = jest.spyOn(robotController, 'executePathWithDelay');
//         robotController.continue();
//         expect(robotController.robot.isMoving).toBe(false);
//         expect(executePathWithDelayMock).not.toHaveBeenCalled();
//     });
// });


