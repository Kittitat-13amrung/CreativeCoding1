class Molecule {
    constructor() {
        this.posX = Math.round(Math.random() * 500);
        this.posY = Math.round(Math.random() * 500);
        this.speedX = Math.random() * 5;
        this.speedY = Math.random() * 5;
        this.radius = Math.round(Math.random() * 15 + 1);
        // this.rotation = rotation;
        this.distanceToCenter = (250 - (this.posY)) / (250 - (this.posX));
    }

    render() {
        let angle = atan2(this.speedY, this.speedX);
        push();
        translate(this.posX, this.posY);
        rotate(angle);
        rect(0, 0, this.radius, this.radius);
        pop();
    }

    move() {
        this.posX += this.speedX;
        this.posY += this.speedY;

        if (this.posX > 500) {
            this.speedX -= 1;
        }

        if (this.posX<0) {
            this.speedX += 1;
        }

        if (this.posY<0) {
            this.speedY += 1;
        }

        if (this.posY>500) {
            this.speedY -= 1;
        }
    }
}
