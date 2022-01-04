class Shooter {
    constructor(x, y) {
        this.pos= createVector(x, y);
        // this.velocity = shooterVelocity;
        this.direction = 0;
        this.barrelAngle = 0;
    }

    // function to render shooter class to canvas
    render() {
        rotate(this.barrelAngle);
        rect(0, 0, 10, 100);
        push();
        translate(this.pos.x, this.pos.y);
        fill(255, 0, 0);
        rectMode(CENTER);
        rect(0, 0, shooterWidth, shooterHeight);
        pop();
    }

    // move shooter 
    move() {
        if (this.pos.x < 150 || this.pos.x > 450) {
            this.direction *= -1;
        }
        this.pos.x += this.direction;
    }

    // set direction of shooter
    setDirection(direction) {
        this.direction = direction;
    }

}