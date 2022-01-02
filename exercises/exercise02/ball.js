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

	// function to set position of x and y
	setPos(x,y) {
		this.x = x;
		this.y = y;
	}

	// function to bounce the ball
    bounceBall() {
        this.x += this.vx;
		this.y += this.vy;

        if (this.x > width - this.radius*2) {
            this.vx -= 2;
        } 
        if (this.x < this.radius*2 ) {
            this.vx += 2;
        }

        if (this.y > height - this.radius*2) {
            this.vy -= 2;
        } 
        if (this.y < this.radius*2 ) {
            this.vy += 2;
        }
    }
}




