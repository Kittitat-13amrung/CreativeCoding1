let emitters = [];

// push emitter at the mouse location
function mousePressed() {
    emitters.push(new Emitter(mouseX, mouseY));
}

function setup() {
    createCanvas(500, 500);
    background(255);
    rectMode(CENTER);
    // emitters = new Emitter(250, 250);
}

function draw() {
    background(0);
    
    // for each emitter do the following
    emitters.forEach(emitter => {
        emitter.createParticles();
        emitter.update();
        emitter.render();
    });

}