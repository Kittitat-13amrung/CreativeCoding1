// let sun;


// function setup() {
//     createCanvas(600, 600, WEBGL);
//     sun = new Planet(50, 0, 0);
//     sun.spawnMoons(1, 1);
//     var easy=createEasyCam();
//     let state = {
//         distance : 300,                 // scalar
//         center   : [sun.v.x, sun.v.y, sun.v.z],         // vector
//         rotation : [1.000, 0.000, 0.000, 0.000],
//     };
//     easy.setState(state, 1000); // animate to state over the period of 1 second
// }

// function draw() {
//     background(0);
//     directionalLight(250, 250, 250, 0, 0, -1);
//     // translate(width/2, height/2);
//     sun.render();
//     sun.orbit();
// }
let pos;
let rocks = [];
let force = 0.01;
let globe;
let meteor;
let angle = 0;
let speed = 0.05;

let a;

function preload() {
    globe = loadImage('imgs/globe.jpg');
}

function setup() {
    createCanvas(750, 500, WEBGL);
    var easy=createEasyCam();
    pos = createVector(width/2, height/2, 0);
    let state = {
        distance : 200,                 // scalar
        center   : [pos.x, pos.y, pos.z],         // vector
        rotation : [1.000, 1.000, 0.000, 0.000],
    };
    // easy.setInterpolatedRotation(width/2, height/2, 0.5);
    easy.setState(state, 1000); // animate to state over the period of 1 second
    easy.setDistanceMin(150);
    easy.setDistanceMax(250);
    // easy.rotate(pos.x, pos.y, pos.z, millis()/1000);
    // rock = new Rock();
    meteor = rocks.push(new Rock());
}

function draw() {
    let axis = createVector(0, height/2 , width/2);
    let a2 = createVector(0, 0, 1);
    a = axis.cross(a2);
    background(255);
    ambientLight(100);
    pointLight(255, 255, 255, 0, 0, 1);
    push();
    translate(width/2, height/2, 0);
    // push();
    // translate(110 * cos(angle), 110 * sin(angle), 0);
    // // line(a.x, a.y, a.z, a.x * 10000, a.y * 10000, a.z * 10000);
    // // line(axis.x, axis.y, axis.z, axis.x * 10000, axis.y * 10000, axis.z * 10000);
    // // rotate(0, a.x, a.y, a.z);
    // fill(90);
    // // texture(globe);
    // sphere(10);
    // pop();
    rotateZ(millis()/1000);
    fill(90);
    texture(globe);
    sphere(30);
    pop();
    // fill(90,90,32);
    // rectMode(CENTER);
    // rect(0,  0, 120, 120);
    // rock.render();
    // rock.rotateRock(rock.checkCenter());
    // push();
    // pop();
    angle = angle + speed;
    rocks.forEach (rock => {
        if (rock.orbital === true) {
            console.log("orbit");
        } else {

        }
        rock.render();
        rock.checkOrbital();
        // rock.moveRock();
        // rock.rotateRock(rock.checkCenter());
        // rock.accelerateRock(cos(rock.rotation) * force, sin(rock.rotation) * force);
        // rock.orbit();
        // if (rock.pos.x <= width/2 + 60 && rock.pos.x >= width/2 - 60 && rock.pos.z <= 120 && rock.pos.z >= -120) {
        //     // rock.rotateRock();
        //     rock.rotateRock(rock.checkCenter());
        //     // rock.accelerateRock(cos(rock.rotation) * force, sin(rock.rotation) * force);
        //     // rock.accelerateRock(0.1, 0.001);
        //     rock.moveRock();
        // } 
        if (rock.orbital && rock.pos.x <= width/2 + 200 && rock.pos.x >= width/2 - 200 && rock.pos.z <= 180 && rock.pos.z >= -180) {
            // force = 0.98;
            // rock.rotateRock(rock.checkCenter());
            // rock.accelerateRock(cos(rock.rotation) * force, sin(rock.rotation) * force);
            // rock.moveRock1();
        } else {
            force = 0.01;
            // rock.rotateRock();
            rock.rotateRock(rock.checkCenter());
            rock.accelerateRock(cos(rock.rotation) * force, sin(rock.rotation) * force);
            rock.moveRock();
            // rock.accelerateRock(0.1, 0.001);

        }

        // if (rock.pos.x <= width/2 + 120 && rock.pos.x >= width/2 - 120 && rock.pos.z <= 120 && rock.pos.z >= -120) {

    });

    rocks.forEach(function(item, index, object) {
        if (item.orbit()) {
            object.splice(index, 1);
    }
    });


    //     rocks[i].render();
    //     rocks[i].rotateRock(rocks[i].checkCenter());
    //     rocks[i].moveRock();
    //     rocks[i].accelerateRock(cos(rocks[i].rotation) * force, sin(rocks[i].rotation) * force);
    //     // if (rocks[i].x >= width + 300 || rocks[i].x <= -300 || rocks[i].y <= -100 || rocks[i].y >= width + 100) {
    //     //     rocks.splice(i, 1);
    //     // }
        // pop();

}

function keyPressed() {
    // Press SPACEBAR to push a new Rock object into the array
    if (keyCode === 32) {
        rocks.push(new Rock());
    }
}

function loopRock() {
    
}