const robotConstructor = require('../../src/modules/robot/initializeRobot');
const Robot = require('../../src/classes/robot');

describe('robotConstructor Module', () => {
    it('should create a Robot instance with the specified language', () => {
        const language = 'Swedish';
        const robot = robotConstructor(language);
        expect(robot).toBeInstanceOf(Robot);
        expect(robot.language).toBe(language);
    });
});
