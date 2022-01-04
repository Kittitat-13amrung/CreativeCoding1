class Molecule {
    constructor(posX, posY, radius, xSpeed, ySpeed) {
        this.posX = random(0, 500);
        this.posY = random(0, 500);
        this.radius = random(0, 50);
        this.xSpeed = random(0, 100);
        this.ySpeed = random(0, 100);
    }

    // function to set new X position 
    setPosX(newPosX) {
        this.posX = newPosX;
        return newPosX; 
    }

    // function to set new Y pos
    setPosY(newPosY) {
        this.posX = newPosY; 
        return newPosY;
    }

    // function to set new radius
    setRadius(newRadius) {
        this.radius = newRadius; 
        return newRadius;
    }

    // function to set new speed for X
    setXSpeed(newXSpeed) {
        this.xSpeed = newXSpeed; 
        return newXSpeed;
    }

    // function to set new speed for Y
    setYSpeed(newYSpeed) {
        this.ySpeed = newYSpeed; 
        return newYSpeed;
    }

    // function to draw ellipse on canvas
    render() {
        fill(0, 255, 0);
        ellipse(this.posX, this.posY, this.radius);
    }
}