const Room = require('../../src/classes/room');

describe('Room Class', () => {
    it('should create a square room with center origin', () => {
        const room = new Room('square', { x: 5, y: 5 }, 'center');
        expect(room.isCircular).toBe(false);
        expect(room.width).toBe(5);
        expect(room.height).toBe(5);
        expect(room.orgio).toBe('center');
    });

 
    it('should check if a point is inside a circular room with center origin', () => {
        const room = new Room('circular', null, 'center',10);
        expect(room.isInside(5, 5)).toBe(true);
        expect(room.isInside(12, 12)).toBe(false);
    });

    it('should check if a point is inside a square room with top-left origin', () => {
        const room = new Room('square', { x: 5, y: 5 }, 'top-left');
        expect(room.isInside(2, 2)).toBe(true);
        expect(room.isInside(6, 6)).toBe(false);
    });

    it('should calculate wall dimensions for a circular room', () => {
        const room = new Room('circular', null, 'center',8);
        expect(room.wall).toEqual({ x: 8, y: 8 });
    });

    it('should calculate wall dimensions for a square room', () => {
        const room = new Room('square', { x: 6, y: 6 }, 'center',null);
        expect(room.wall).toEqual({ x: 3, y: 3 });
    });

    it('should throw an error for an invalid room shape', () => {
        expect(() => new Room('triangle', 10, 'center')).toThrow('Invalid shape: triangle');
    });
});
