class Ball {
	constructor(x, y, vx, vy, radius, r, g, b) {
		//properties
		this.x = x;
		this.y = y;
		this.vx = vx;
		this.vy = vy;
		this.radius = radius;
		this.r = r;
		this.g = g;
		this.b = b;
		//this.rotation = 0;
	
   }
   //function to draw the ball
   drawBall() {
	  
		//translate(this.x, this.y);
		//rotate(this.rotation);
		fill(this.r, this.g, this.b);
		ellipse(this.x, this.y, this.radius*2, this.radius*2);
		
	} 
	//function to move the ball
	moveBall() {
		this.x = this.x + this.vx;
		this.y = this.y + this.vy;
	}

	setPos(x, y) {
		this.x = x;
		this.y = y;
	}

	setSpeed(vx, vy) {
		this.vx = vx;
		this.vy = vy;
	}

    // function to accelerate the ball
    accelerateBall(ax, ay) {
        this.vx += ax;
        this.vy += ay;
    }
}




