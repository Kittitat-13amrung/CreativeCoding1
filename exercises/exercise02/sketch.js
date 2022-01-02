let ball1;
let ball2;
let ball3;
let ball4;
let collision;

// GUI variables
var Questions = ['1','2','3'];
var gui;

function setup() {
    createCanvas(750, 500);
    //Create a GUI
    gui = createGui("Answer To:");
    // Add a new global input
    gui.addGlobals('Questions');
    // Set new position for GUI 
    gui.setPosition(width - 200, 190);
    // instanciating new objects into the variables
    ball1 = new Ball(0, 0, 2, 3, 10, 255, 120, 50);
    ball2 = new Ball(10, 10, 4, 3, 10, 120, 220, 100);
    ball3 = new Ball(200, 240, 6.3, 13.6, 20, 255, 30, 100);
    ball4 = new Ball(100, 240, 11, 10, 20, 100, 100, 32);
}

function draw() {
    background(120);
    
    let mode = Questions;
    
    // QUESTION 1
    if (mode == 1) {
        ball1.drawBall();
        ball1.moveBall();

        // Reset position of X and Y
        if (ball1.x >= width + ball1.radius*2 || ball1.y >= height + ball1.radius*2) {
            ball1.setPos(0, 0);
        }
    }
    // QUESTION 2
    else if (mode == 2) {
        ball2.drawBall();
        ball2.moveBall();

        // Reset position of X and Y
        if (ball2.x >= width + ball2.radius*2 || ball2.y >= height + ball2.radius*2) {
            ball2.setPos(0, 0);
        }
    }
    // QUESTION 3
    else if (mode == 3) {
        ball3.drawBall();
        ball3.bounceBall();
        ball4.drawBall();
        ball4.bounceBall();
    
        // Check for collision of the two given ball
        collision = ballCollision(ball3.x, ball3.y, ball4.x, ball4.y);

        // Display the distance between the two given ball
        textAlign(CENTER);
        text(collision, width / 2, height / 2);

        // Conditional statement to reflect the ball if the two given ball collide
        if (collision <= ball3.radius + ball4.radius) {
            ball3.vx *= -1;
            ball3.vy *= -1;
            ball4.vx *= -1;
            ball4.vy *= -1;
        }
      }


}

// function to calculate the distance between the two given ball
function ballCollision(x1, y1, x2, y2) {
    let dist;

    dist = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));

    return dist;
}
