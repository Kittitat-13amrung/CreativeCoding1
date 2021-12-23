class Rock {
    constructor() {
        this.spawnHeight = [-100, height+100];
        this.x = random(0, width);
        this.y = random(this.spawnHeight);
        this.rotation = this.checkCenter();
        this.size = random(1, 50);
        this.vx = random(0, 1);
        this.vy = random(0, 1);
    }

    render() {
        push();
        translate(this.x, this.y);
        rotate(this.rotation);
        fill(90);
		beginShape();
		vertex(10, 0);
		vertex(-10, 10);
		vertex(-5, 0);
		vertex(-10, -10);
		vertex(10, 0);
		endShape();
        pop();
    }

    accelerateRock(ax, ay) {
        this.vx = this.vx + ax;
        this.vy = this.vy + ay;
    }

    rotateRock(rotate) {
        this.rotation = rotate;
    }

    checkCenter() {
        let dx, dy, centerPos;
        dx = (width / 2) - this.x;
        dy = (height / 2) - this.y;
        centerPos = atan2(dy, dx);
        return centerPos;
    }

    moveRock()
	{
		this.x = this.x + this.vx;
		this.y = this.y + this.vy;
	}
}