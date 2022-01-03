let rocks = [];
let force = 0.01;
let screenWidth = 1024;
let screenHeight = 950;
let globe, asteroid, space;

let angle = 0;
let speed = 0.05;

let gui;
let visibility = false;
let params = {
    howMany: 1,
    howManyMin: 1,
    howManyMax: 10,

    Shape: ["Sphere", "Box", "Cone"],

    initialise: false
}


let button;

function preload() {
    globe = loadImage('imgs/globe.jpg');
    asteroid = loadImage('imgs/asteroid.jpg');
    space = loadImage('imgs/space.jpg');
}

function setup() {
    createCanvas(screenWidth, screenHeight - 250, WEBGL);
    var easy=createEasyCam();
    let state = {
        distance : 200,                 // scalar
        center   : [width/2, height/2, 0],         // vector
        rotation : [1.300, 1.000, 0.000, 0.000],
    };
    easy.setState(state, 1000); // animate to state over the period of 1 second
    easy.setDistanceMin(150);
    easy.setDistanceMax(350);
    
    gui = createGui('Inititate Asteroid');
    gui.setPosition(width - 250, 200);
    gui.addObject(params);
}

function draw() {
    screenWidth = windowWidth;
    screenHeight = windowHeight;
    if (params.initialise) {
        for (let i = 0; i < params.howMany; i++) {
            rocks.push(new Rock());

            params.initialise = false;
        }
    }
    background(0);
    let dirX = (mouseX / width - 0.5) * 2;
    let dirY = (mouseY / height - 0.5) * 2;
    directionalLight(250, 250, 250, 1, 2, -3);
    push();
    translate(width/2, height/2, 0);
    rotateZ(millis()/1000);
    fill(90);
    texture(globe);
    sphere(30);
    pop();

    rocks.forEach (rock => {
        rock.render();
        rock.checkOrbital();

        if (rock.orbital && rock.pos.x <= width/2 + 200 && rock.pos.x >= width/2 - 200 && rock.pos.z <= 180 && rock.pos.z >= -180) {
            // force = 0.98;
            rock.rotateRock(rock.checkCenter());
            // rock.accelerateRock(cos(rock.rotation) * force, sin(rock.rotation) * force);
            rock.moveRock();
        } else {
            force = 0.01;
            rock.rotateRock(rock.checkCenter());
            rock.accelerateRock(cos(rock.rotation) * force, sin(rock.rotation) * force);
            rock.moveRock();
            // rock.accelerateRock(0.1, 0.001);

        }
    });

    
    rocks.forEach(function(rock, index, object) {
        if (rock.orbit()) {
            object.splice(index, 1);
    }
    });

    for (let i = 0; i < rocks.length; i++) {
        for (let j = i + 1; j < rocks.length; j++) {
          let rock1 = rocks[i];
          let rock2 = rocks[j];
          let collision;
    
          // Check for overlap:
          collision = rockCollision(rock1.pos.x, rock1.pos.y, rock2.pos.x, rock2.pos.y);

          if (collision <= rock1.size + rock2.size) {
              console.log(collision);
              rock1.vx *= -1;
              rock1.vy *= -1;
              rock1.vz *= -2;
              rock2.vx *= -1;
              rock2.vy *= -1;
              rock2.vz *= -2;
          }
        }
      }
}

function keyPressed() {
    // Press SPACEBAR to push a new Rock object into the array
    if (keyCode === 32) {
        rocks.push(new Rock());
    } else if (keyCode === 71) {
        gui.toggleVisibility();
    }
}

function rockCollision(x1, y1, x2, y2) {
    let dist;

    dist = Math.sqrt(Math.abs((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)));

    return dist;
}