let sun;


function setup() {
    createCanvas(600, 600, WEBGL);
    sun = new Planet(50, 0, 0);
    sun.spawnMoons(1, 1);
    var easy=createEasyCam();
    let state = {
        distance : 300,                 // scalar
        center   : [sun.v.x, sun.v.y, sun.v.z],         // vector
        rotation : [1.000, 0.000, 0.000, 0.000],
    };
    easy.setState(state, 1000); // animate to state over the period of 1 second
}

function draw() {
    background(0);
    directionalLight(250, 250, 250, 0, 0, -1);
    // translate(width/2, height/2);
    sun.render();
    sun.orbit();
}