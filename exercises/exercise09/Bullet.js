class Bullet {
    constructor(x, y, a) {
        this.pos= createVector(x, y);
        this.velocity = bulletVelocity;
        this.angle = a;
    }

    // function to draw bullet on canvas
    render() {
        push();
        translate(this.pos.x, this.pos.y);
        fill(255, 0, 0);
        ellipse(0, 0, bulletWidth, bulletHeight);
        pop();
    }

    // function to move bullet(s)
    move() {
        // this.pos.x -= this.velocity;
        this.pos.y -= this.velocity;
    }

    // function to check for collision between
    // the alien and the bullet
    hits(alien) {
        let distance = p5.Vector.sub(this.pos, alien.pos).mag();
        if (distance < 30) {
            return true;
        } else {
            return false;
        }
    }
}