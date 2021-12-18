let ball1, ball2, collision;

function setup() {
    createCanvas(750, 500);
    ball1 = new Ball(0, 0, 3, 0, 10, 255, 120, 50);
    ball2 = new Ball(width/2, height/2, 4, 3, 10, 120, 220, 100);
}

function draw() {
    background(120);

    // get the ball to display
    ball1.drawBall();
    // accelerate the ball by x velocity and y velocity 
    ball1.accelerateBall(0, 0.3);
    // get the ball to move
    ball1.moveBall();
    }