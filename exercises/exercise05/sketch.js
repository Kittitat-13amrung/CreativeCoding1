// declaring global variables
let ship1, rotation, posY, force, angle;
angle = 0;
vr = 0;
force = 0;

function setup() {
    createCanvas(750,500);
    ship1 = new Ship(width/2,height/2,1,0, 0, false);
}

function draw() {
    background(255);
    // draw ship on the canvas
    ship1.drawShip();
    angle = vr;
    console.log(angle);
    if (keyIsDown(LEFT_ARROW)) {
        vr -= 0.1 * PI;
        ship1.rotateShip(vr);
        // console.log(vr);
    }
    
    if (keyIsDown(RIGHT_ARROW)) {
        vr += 0.1 * PI;
        ship1.rotateShip(vr);
        // console.log(vr);
    }
    
    if (keyIsDown(UP_ARROW)) {
        let ax, ay;
        force = 0.3;
        // calculate the acceleration of the position x and y
        ax = cos(angle) *force;
        ay = sin(angle) *force;
        
        // console.log(ax, ay);
        ship1.setShowFlame(true);
        ship1.moveShip();
        ship1.accelerateShip(ax, ay);
    } else {
        force = 0;
        ship1.setShowFlame(false);
    }
}