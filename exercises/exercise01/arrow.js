class Arrow {
    constructor(x, y, rotation) {
        this.x = x;
        this.y = y;
        this.rotation = rotation;
    }

    // QUESTION 1
	// calculate the angle of the point of the arrow head and the position of the mouse
    followMouse() {
        let dx, dy, mousePos;
        dx = mouseX - (width/2);
        dy = mouseY - (height/2);
        mousePos = atan2(dy, dx);
        return mousePos;
    }

    drawArrow() {
        //translate from the top left corner to x and y of object
		translate(this.x, this.y);
		//rotate by rotation value of the mouse
		rotate(this.followMouse());
		line(-50, -25, 0, -25);
		line(0, -25, 0, -50);
		line(0, -50, 50, 0);
		line(50, 0, 0, 50);
		line(0, 50, 0, 25);
		line(0, 25, -50, 25);
		line(-50, 25, -50, -25);
	}

	// QUESTION 2 PART 1
	// calculate the angle of the center point and the position of the mouse 
    atMouse() {
        let dx, dy, mousePos;
        dx = (width / 2) - mouseX;
        dy = (height / 2) - mouseY;
        mousePos = atan2(dy, dx);
        return mousePos;
    }

    drawMouseArrowCenter() {
        //translate from the top left corner to x and y of object
		translate(mouseX, mouseY);
		//rotate by rotation value of object
		rotate(this.atMouse());
		line(-50, -25, 0, -25);
		line(0, -25, 0, -50);
		line(0, -50, 50, 0);
		line(50, 0, 0, 50);
		line(0, 50, 0, 25);
		line(0, 25, -50, 25);
		line(-50, 25, -50, -25);
	}

    // QUESTION 2 PART 2
    // calculate the angle of the top left point of the the canvas and the position of the mouse
    atMouseTopLeft () {
        let dx, dy, mousePos;
        dx = 0 - mouseX;
        dy = 0 - mouseY;
        mousePos = atan2(dy, dx);
        return mousePos;
    }

    drawMouseArrowTopLeft() {
        //translate from the top left corner to x and y of object
		translate(mouseX, mouseY);
		//rotate by rotation value of object
		rotate(this.atMouseTopLeft());
		line(-50, -25, 0, -25);
		line(0, -25, 0, -50);
		line(0, -50, 50, 0);
		line(50, 0, 0, 50);
		line(0, 50, 0, 25);
		line(0, 25, -50, 25);
		line(-50, 25, -50, -25);
	}

}