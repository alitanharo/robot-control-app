const Room = require('../../classes/room');

const roomConstructor = (shape, size, origin, radius) => new Room(shape, size, origin, radius);
    

module.exports = roomConstructor;
