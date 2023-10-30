class Room {
    constructor(shape, size, orgio, radius = null) {
        switch (shape) {
            case 'square':
                this.initializeSquareRoom(size, orgio);
                break;
            case 'circular':
                this.initializeCircularRoom(radius, orgio);
                break;
            default:
                throw new Error('Invalid shape: ' + shape);
        }
    }

    initializeSquareRoom(size, orgio) {
        this.isCircular = false;
        this.width = size.x;
        this.height = size.y;
        this.orgio = orgio;
    }

    initializeCircularRoom(radius, orgio) {
        this.isCircular = true;
        this.radius = radius;
        this.orgio = orgio;
    }

    isInside(x, y) {
        switch (this.isCircular) {
            case true:
                return this.isInsideCircular(x, y);
            case false:
                return this.isInsideSquare(x, y);
            default:
                throw new Error('Invalid room type!');
        }
    }

    isInsideCircular(x, y) {
        const distance = Math.sqrt(x * x + y * y);
        if (this.orgio === 'center') {
            return distance <= this.radius;
        } else {
            return distance <= this.radius * 2;
        }
    }

    isInsideSquare(x, y) {
        if (this.orgio === 'center') {
            return Math.abs(x) <= Math.floor(this.width / 2) && Math.abs(y) <= Math.floor(this.height / 2);
        } else {
            return Math.abs(x) <= Math.floor(this.width) && Math.abs(y) <= Math.floor(this.height);
        }
    }

    get wall() {
        return {
            x: this.calculateWallX(),
            y: this.calculateWallY(),
        };
    }

    calculateWallX() {
        if (this.orgio === 'center') {
            return this.isCircular ? this.radius : this.width / 2;
        } else {
            return this.isCircular ? this.radius * 2 : this.width;
        }
    }

    calculateWallY() {
        if (this.orgio === 'center') {
            return this.isCircular ? this.radius : this.height / 2;
        } else {
            return this.isCircular ? this.radius * 2 : this.height
        }
    }

}

module.exports = Room