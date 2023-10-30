const roomConstructor = require('../../src/modules/room/initializeRoom');
const Room = require('../../src/classes/room');




describe('roomConstructor Module', () => {
    it('should create a Room instance with the specified parameters for a square room', () => {
        const shape = 'square';
        const size = { x: 5, y: 5 };
        const origin = 'center';
        const room = roomConstructor(shape, size, origin, null);
        expect(room).toBeInstanceOf(Room);
        
    });

    it('should create a Room instance with the specified parameters for a circular room', () => {
        const shape = 'circular';
        const radius = 10;
        const origin = 'center';
        const room = roomConstructor(shape, null, origin, radius);
        expect(room).toBeInstanceOf(Room);
        expect(room.radius).toBe(radius);
        expect(room.orgio).toBe(origin);
    });

    it('should throw an error for an invalid room shape', () => {
        const invalidShape = 'triangle';
        const size = { x: 5, y: 5 };
        const origin = 'center';
        expect(() => roomConstructor(invalidShape, size, origin, null)).toThrowError('Invalid shape: ' + invalidShape);
    });
});
