// declarings global variables
let angle, arrow1;

function setup() {
    createCanvas(750, 500);
    background(120);
    // noCursor();

	// instanciating data into the class object
    arrow1 = new ArrowUpdated(0, 0, 1, .5, 90, 1);
	// calculating for the angle to point the arrow is heading
	angle = atan2(arrow1.vy, arrow1.vx);
}

function draw() {
    background(120);

	// update the rotation value of the angle
    arrow1.setRotation(angle);
	// draw the arrow
    arrow1.drawArrow();
	// accelerate arrow
    arrow1.moveArrow();
}

