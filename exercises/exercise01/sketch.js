//declaring global variables for class object to be iterate to it
let arrow1, arrow2;

function setup() {
    createCanvas(750, 500);
    background(120);
    noCursor();
    // arrow1 = new Arrow(375, 250);
    arrow1 = new Arrow();
}

function draw() {
    background(120);

	// QUESTION 1
    // arrow1.drawArrow();

	// QUESTION 2 PART 1
    // arrow1.drawMouseArrowCenter();

	// QUESTION 2 PART 2
    arrow1.drawMouseArrowTopLeft();
}

