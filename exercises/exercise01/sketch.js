//declaring global variables for class object to be iterate to it
let arrow1, arrow2;
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
    background(120);
    // noCursor();
}

function draw() {
    background(120);
    let mode = Questions;

    // QUESTION 1
    if (mode == 1) {
        arrow1 = new Arrow(width/2, height/2);
        arrow1.drawArrow();
      }
      // QUESTION 2 PART 1
      else if (mode == 2) {
        ellipse(width/2, height/2, 10);
        arrow1 = new Arrow();
        arrow1.drawMouseArrowCenter();
      }
      // QUESTION 2 PART 2
      else if (mode == 3) {
        arrow1 = new Arrow();
          arrow1.drawMouseArrowTopLeft();
      }

}


