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

let rocks = [];
let force = 0.01;
let globe;
let meteor;

function preload() {
    globe = loadImage('imgs/globe.jpg');
}

function setup() {
    createCanvas(750, 500, WEBGL);
    var easy=createEasyCam();
    let state = {
        distance : 200,                 // scalar
        center   : [width/2, height/2, 0],         // vector
        rotation : [1.000, 1.000, 0.000, 0.000],
    };
    // easy.setInterpolatedRotation(width/2, height/2, 0.5);
    easy.setState(state, 1000); // animate to state over the period of 1 second
    easy.setDistanceMin(150);
    easy.setDistanceMax(250);
    // rock = new Rock();
    meteor = rocks.push(new Rock());
}

function draw() {
    background(255);
    ambientLight(100);
    pointLight(255, 255, 255, 0, 0, 1);
    push();
    translate(width/2, height/2, 0);
    fill(90);
    texture(globe);
    sphere(30);
    pop();
    fill(90,90,32);
    rectMode(CENTER);
    // rect(0,  0, 120, 120);
    // rock.render();
    // rock.rotateRock(rock.checkCenter());
    
    
    rocks.forEach (rock => {
        rock.render();
        // rock.moveRock();
        // rock.rotateRock(rock.checkCenter());
        // rock.accelerateRock(cos(rock.rotation) * force, sin(rock.rotation) * force);
        // rock.orbit();
        if (rock.pos.x <= width/2 + 60 && rock.pos.x >= width/2 - 60 && rock.pos.z <= 120 && rock.pos.z >= -120) {
            // rock.rotateRock();
            rock.rotateRock(rock.checkCenter());
            // rock.accelerateRock(cos(rock.rotation) * force, sin(rock.rotation) * force);
            // rock.accelerateRock(0.1, 0.001);
            rock.moveRock();
        } 
        if (rock.pos.x <= width/2 + 120 && rock.pos.x >= width/2 - 120 && rock.pos.z <= 120 && rock.pos.z >= -120) {
            force = 9.8;
            rock.rotateRock(rock.checkCenter());
            // rock.accelerateRock1(cos(rock.rotation) * force, sin(rock.rotation) * force);
            rock.moveRock1();
        } 
            force = 0.1;
            // rock.rotateRock();
            rock.rotateRock(rock.checkCenter());
            rock.accelerateRock(cos(rock.rotation) * force, sin(rock.rotation) * force);
            rock.moveRock();
            // rock.accelerateRock(0.1, 0.001);

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