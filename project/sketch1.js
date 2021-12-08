let rocks = [];
let earth;
function setup() {
    createCanvas(500, 500, WEBGL);
    background(0);
    createEasyCam();
}

function keyPressed() {
    if (keyCode === RIGHT_ARROW) {
        rock.launch();
    }
}

function draw() {
    background(0);
    noStroke();
    Earth = sphere(50);

}