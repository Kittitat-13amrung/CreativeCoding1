class Rock {
    // instanciate variables into the class
    constructor(size, vx, vy, vz, shape) {
        // randomise the spawn location of the asteroid
        this.pos = createVector(random(-300, width+300), random(-300, height+300));
        // call back to the checkCenter() function to find the angle
        // between the asteroid and Earth 
        this.rotation = this.checkCenter();
        // size of the asteroid
        this.size = size;
        // speeds
        this.vx = vx;
        this.vy = vy;
        this.vz = vz;
        // boolean to check if the asteroid
        // has entered Earth's astmostphere
        this.orbit = false;
        this.angle = 0;
        this.shape = shape;
    }

    // function to draw the asteroid on the canvas
    render() {
        // push is used so that it won't mess the translate and rotate function
        push();
        // if true, orbit around 
        if (this.orbit === true) {
            translate(width/2, height/2);
            rotate(this.rotation);
            // angular velocity
            translate(60 * cos(this.angle), 60 * sin(this.angle), 0);
            // gets asteroid to spin on its own axis
            rotateZ(millis()/1000);
            // keep adding so it will keep rotating
            this.angle += speed;
        // if false, keep re-bounding to Earth
        } else if (this.orbit === false) {
            translate(this.pos.x, this.pos.y + 10);
            rotate(this.rotation);
            rotateZ(-millis()/1000);
        }

        // add texture and remove mashes
        noStroke();
        texture(asteroid);

        // check what the GUI said for shapes
        if (this.shape == "Sphere") {
            sphere(this.size);
        } else if (this.shape == "Box") {
            box(this.size);
        } else if (this.shape == "Cylinder") {
            cylinder(this.size, 20);
        }

        // Testing where the object is looking/heading towards
		// beginShape();
		// vertex(10, 0, 0);
		// vertex(-10, 0, 10);
		// vertex(-5, 0, 0);
		// vertex(-10, 0, -10);
		// vertex(10, 0, 0);
		// endShape();
        pop();
    }

    // function to accelerate asteroid
    accelerateRock(ax, ay) {
        this.vx = this.vx + ax;
        this.vy = this.vy + ay;
        // this.vz = this.vz + az;
    }

    // function to rotate asteroid
    rotateRock(rotate) {
        this.rotation = rotate;
    }

    // function to check the angle between 
    // the asteroid and Earth
    checkCenter() {
        let dx, dy, center;
        // location of Earth - X position of the asteroid
        dx = width/2 - this.pos.x;
        // location of Earth - Y position of the asteroid
        dy = height/2 - this.pos.y;
        // Use Inverse Tangent to calculate angle
        center = atan2(dy, dx);
        return center;
    }

    // function to check if the asteroid has entered Earth's atmosphere
    checkOrbit() {
        (this.pos.x <= width/2 + 30 && this.pos.x >= width/2 - 30 && this.pos.z <= 30 && this.pos.z >= -30) ? this.orbit = true : null;
    }

    // function to move asteroid
    moveRock()
	{
		this.pos.x = this.pos.x + this.vx;
		this.pos.y = this.pos.y + this.vy;

        (this.pos.z >= 100) ? this.pos.z = this.pos.z - this.vz : null;
        (this.pos.z <= 100) ? this.pos.z = this.pos.z + this.vz : null;
	}

    moveRock1()
	{
		this.pos.x = this.pos.x + this.vx;
        this.pos.z = this.pos.z + this.vz;
	}

    // function to check
    hitEarth() {
        if (this.pos.x <= width/2 + 30 && this.pos.x >= width/2 - 30 && this.pos.y <= height/2 + 30 && this.pos.y >= height/2 - 30) {
            return true;
        } else {
            return false
        }
    }
    
}