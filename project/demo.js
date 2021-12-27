class Rock {
    constructor() {
        this.spawnHeight = [-300, height+300];
        this.v2 = createVector(1, 0, 1);
        this.pos = createVector(random(-300, width+300), height/2, random(this.spawnHeight));
        // this.x = random(-300, width+300);
        // this.z = random(this.spawnHeight);
        this.angle = random(0, TWO_PI);
        this.rotation = this.checkCenter();
        this.size = random(1, 50);
        this.vx = random(0, 1);
        this.vy = random(0, 1);
        this.vz = random(0, 1);
        this.orbitSpeed = 0.00000000000000001;
        this.p = this.pos.cross(this.v2);
    }

    render() {
        push();
        translate(width/2, height/2);
        rotate(this.rotation);
        translate(this.pos.x, this.pos.y, this.pos.z);
        fill(90);
        // sphere(10);
		beginShape();
		vertex(10, 0, 0);
		vertex(-10, 0, 10);
		vertex(-5, 0, 0);
		vertex(-10, 0, -10);
		vertex(10, 0, 0);
		endShape();
        pop();
    }

    spin() {
        push();
        translate(width/2, height/2);
        rotate(this.angle, this.p.x, this.p.y, this.p.z);
        translate(this.pos.x, this.pos.y, this.pos.z);
        fill(90);
        // sphere(10);
		beginShape();
		vertex(10, 0, 0);
		vertex(-10, 0, 10);
		vertex(-5, 0, 0);
		vertex(-10, 0, -10);
		vertex(10, 0, 0);
		endShape();
        pop();
    }

    orbit() {
        this.angle += this.orbitSpeed;
    }

    accelerateRock(ax, az) {
        this.vx = this.vx + ax;
        // this.vy = this.vy + ay;
        this.vz = this.vz + az;
    }

    rotateRock(rotate) {
        this.rotation = rotate;
    }

    checkCenter() {
        let dx, dy, centerPos;
        dx = (width / 2) - this.pos.x;
        dy = (height / 2) - this.pos.z;
        centerPos = atan2(dy, dx);
        return centerPos;
    }

    moveRock()
	{
		this.pos.x = this.pos.x + this.vx;
        // this.pos.y = this.pos.y + this.vy;
		this.pos.z = this.pos.z + this.vz;
	}
}