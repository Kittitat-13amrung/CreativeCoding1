class Alien {
    constructor(x, y) {
        this.pos= createVector(x, y);
        this.velocity = alienVelocity;
    }

    // function to draw alien on the screen
    render() {
        push();
        // fill(255, 0, 0);
        // ellipse(0, 0, alienWidth, alienHeight);
        translate(this.pos.x, this.pos.y);
        image(alienImg, 0, 0, alienWidth, alienHeight);
        pop();
    }

    // function to move aliens to the side
    move() {
        this.pos.x += this.velocity;

    }

    // function to move aliens down
    shift() {
        this.pos.y += shiftDown;
        this.velocity *= -1;
    }
}