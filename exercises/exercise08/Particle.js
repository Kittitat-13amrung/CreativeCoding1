class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.velocity = p5.Vector.random2D();
    this.velocity.mult(random(0.5, 2));
    this.acc = createVector(0, 0);
    this.r = 4;
    this.lifetime = 255;
  }

  // check if the particle has finished its cycle
  isFinished() {
      return (this.lifetime < 0);
  }

  // apply value of force to the acceleration
  applyForce(force) {
    this.acc.add(force);
  }

  // updating the value
  update() {
    this.pos.add(this.velocity);
    this.velocity.add(this.acc);
    this.acc.set(0, 0);
    this.lifetime -= 1;
  }

  // render particle to canvas
  render() {
    stroke(this.lifetime);
    strokeWeight(2);
    fill(255, this.lifetime);

    // check if the cycle worked?
    // if (this.isFinished()) {
    //     fill(0, 255, 0);
    
    // }

    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }

  // function to give the particle effect
  edges() {
    if (this.pos.y >= height - this.r) {
      this.pos.y = height - this.r;
      this.velocity.y *= -1;
    } else if (this.pos.y <= 0 + this.r) {
      this.pos.y = 0 + this.r;
      this.velocity.y *= -1;
    }
  }
}
