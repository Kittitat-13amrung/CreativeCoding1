let ball1;
let globe;
const fr = 60;
let angle = 0;
let theta = 1 * Math.PI / fr;
let radius = 140;

function preload() {
    globe = loadImage('imgs/globe.jpg');
}

function setup() {
    createCanvas(750, 500, WEBGL);
    createEasyCam();
    frameRate(fr);
    background(120);

    ball1 = new Ball(30, 30, 0, 0, 0);
}


function draw() {
    ambientLight(100);
    pointLight(255, 255, 255, 0, 0, 1);
    background(120);
    
    // shininess(3);
    // push();
    // texture(globe);
    // rotateX(millis()/ 1000);
    // rotateZ(millis()/ 2500);
    // sphere(100);
    // pop();

    // push();
    // noStroke();
    // translate(120, 0, 0);
    // ambientMaterial(0, 0, 255);
    // sphere(10);    
    // pop();

    push();
    translate(ball1.x, 0, ball1.x);
    // rotateX(ball.x)
    texture(globe);
    ball1.drawBall();
    ball1.moveBall();
    // noFill();
    // translate(0, 0);

    ball1.move(theta, angle);
    pop();

}

class Ball {
	constructor(x, y, vx, vy, radius) {
		//properties
		this.x = x;
		this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.radius = radius;
    }

    drawBall() {
		// translate(this.x, this.y, this.x);
		sphere(this.radius*2);
		
	} 

	moveBall() {
		this.x = this.x + Math.cos(atan2(this.y, this.x)) * 2;
		this.y = this.y + Math.sin(atan2(this.y, this.x)) * 2;
	}

    move(t, a) {
        angle += theta;
        fill(0);
        sphere(10);
        if(cos(angle) == 1) {
          angle = 0;
        }
      }
}