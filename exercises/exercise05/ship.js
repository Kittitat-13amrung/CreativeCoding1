class Ship {
	constructor(x, y, vx, vy, rotation, showFlame) {
	this.x = x;
	this.y = y;
	this.vx = vx;
	this.vy = vy;
	this.rotation = rotation;
	this.showFlame = showFlame;
}

	// function to display the ship
	drawShip()
	{
		push();
		translate(this.x, this.y);
		rotate(this.rotation);
		//lineWidth = 1;
		//context.strokeStyle = "#ffffff";
		beginShape();
		vertex(10, 0);
		vertex(-10, 10);
		vertex(-5, 0);
		vertex(-10, -10);
		vertex(10, 0);
		endShape();
 
		if (this.showFlame) {
		beginShape();
		vertex(-7.5, -5);
		vertex(-15, 0);
		vertex(-7.5, 5);
		endShape();
		//context.stroke();
		}
		pop();
	}

	// function to accelerate the ship
	accelerateShip(ax, ay)
	{
		this.vx = this.vx + ax;
		this.vy = this.vy + ay;
	}
	// function to move ship
	moveShip()
	{
		this.x = this.x + this.vx;
		this.y = this.y + this.vy;
	}
	// function to rotate the ship
    rotateShip(rotate) {
        this.rotation = rotate;
    }
	// function to show flame
    setShowFlame(value) {
        this.showFlame = value;
    }
}