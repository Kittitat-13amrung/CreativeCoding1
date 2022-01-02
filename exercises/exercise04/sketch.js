let ball1, ball2, collision;
var Questions = ['1','2'];
var Reset = false;
var gui;

function setup() {
    createCanvas(750, 500);
    //Create a GUI
    gui = createGui("Answer To:");
    // Add a new global input
    gui.addGlobals('Questions', 'Reset');
    // Set new position for GUI 
    gui.setPosition(width - 200, 190);
    
    ball1 = new Ball(0, 0, 3, 0, 10, 255, 120, 50);
    ball2 = new Ball(width/2, height/2, 4, 3, 10, 120, 220, 100);
}

function draw() {
    background(120);

    let mode = Questions;

    // QUESTION 1
    if (mode == 1) {
        // get the ball to display
        ball1.drawBall();
        // accelerate the ball by x velocity and y velocity 
        ball1.accelerateBall(0, 0.3);
        // get the ball to move
        ball1.moveBall();
        
        if (Reset == true) {
            ball1.setPos(0, 0);
            ball1.setSpeed(3, 0);
            
            Reset = false;
        }

      }
      // QUESTION 2
      else if (mode == 2) {
        // get the ball to display
        ball2.drawBall();
        // accelerate the ball by x velocity and y velocity 
        ball2.accelerateBall(0, 0.3);
        // get the ball to move
        ball2.moveBall();


        // Reset ball if true
        if (Reset == true) {
            ball2.setPos(width/2, height/2);
            ball2.setSpeed(4, 3);

            Reset = false;
        }
    
      }
    }