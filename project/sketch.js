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
let force = 0.1;

function setup() {
    createCanvas(750, 500, WEBGL);
    // rock = new Rock();

    var easy=createEasyCam();
    let state = {
        distance : 300,                 // scalar
        center   : [width/2,height/2, 0],         // vector
        rotation : [1.000, 0.000, 0.000, 0.000],
    };
    easy.setState(state, 1000); // animate to state over the period of 1 second
}

function draw() {
    background(255);
    push();
    fill(90);
    translate(width/2, height/2);
    sphere(30);
    pop();
    // rock.render();
    // rock.rotateRock(rock.checkCenter());
    // rock.moveRock();
    // rock.accelerateRock(cos(rock.rotation) * force, sin(rock.rotation) * force);

    for(let i = rocks.length - 1; i >= 0; i--) {
        // push();
        rocks[i].render();
        rocks[i].rotateRock(rocks[i].checkCenter());
        rocks[i].moveRock();
        rocks[i].accelerateRock(cos(rocks[i].rotation) * force, sin(rocks[i].rotation) * force);
        // if (rocks[i].x >= width + 300 || rocks[i].x <= -300 || rocks[i].y <= -100 || rocks[i].y >= width + 100) {
        //     rocks.splice(i, 1);
        // }
        // pop();

    }
}

function keyPressed() {
    if (keyCode === 32) {
        rocks.push(new Rock());
    }
}

function loopRock() {
    
}
