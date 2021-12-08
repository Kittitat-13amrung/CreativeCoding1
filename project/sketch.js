let sun;


function setup() {
    createCanvas(600, 600, WEBGL);
    createEasyCam();
    sun = new Planet(50, 0, 0);
    sun.spawnMoons(1, 1);
}

function draw() {
    background(0);
    directionalLight(250, 250, 250, 0, 0, -1);
    // translate(width/2, height/2);
    sun.render();
    sun.orbit();
}