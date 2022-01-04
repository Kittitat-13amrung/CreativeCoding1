// Width and Height
let screenWidth = 1024;
let screenHeight = 950;

// Variables to preload images
let globe, asteroid;

// Rock variables
let rocks = [];
// Set force to be use in angular velocity
let force = 0.01;

// Set the speed of rotation when orbiting around Earth
let speed = 0.05;

// Graphic User Interface
let gui;
let visibility = false;
// Parameter object to be put into the GUI
let params = {
    howMany: 1,
    howManyMin: 1,
    howManyMax: 5,

    size: 1,
    sizeMin: 1,
    sizeMax: 8,

    VX: 0.5,
    VXMin: 0.1,
    VXMax: 1,
    VXStep: 0.1,

    VY: 0.5,
    VYMin: 0.1,
    VYMax: 1,
    VYStep: 0.1,
    
    VZ: 0.5,
    VZMin: 0.1,
    VZMax: 1,
    VZStep: 0.1,

    // User can change shapes before initiating asteroid
    Shape: ["Sphere", "Box", "Cylinder"], 

    // boolean to confirm launching the asteroid
    initialise: false
}

// Preloading images
function preload() {
    globe = loadImage('imgs/globe.jpg');
    asteroid = loadImage('imgs/asteroid.jpg');
    space = loadImage('imgs/space.jpg');
}

// Setup
function setup() {
    // Sketch size with 3D functionality (WEBGL)
    createCanvas(screenWidth, screenHeight - 250, WEBGL);

    // Setting up 3D camera
    var cam = createEasyCam();
    // Replace camera's default value
    let state = {
        distance : 200,
        center   : [width/2, height/2, 0],
        rotation : [1.300, 1.000, 0.000, 0.000],
    };
    // Apply new setting
    cam.setState(state, 1000);
    // Set camera's minimum and maximum zooming distance
    cam.setDistanceMin(150);
    cam.setDistanceMax(350);
    
    // Create a GUI for user to interact
    gui = createGui('Inititate Asteroid (Press "G" to hide)').setPosition(width - 250, 200);
    // Add parameters to GUI
    gui.addObject(params);
}

// Loop
function draw() {

    //  If initiliase is true, push new Rock class into the array
    // by the amount specified in GUI
    if (params.initialise) {
        for (let i = 0; i < params.howMany; i++) {
            rocks.push(new Rock(params.size, params.VX, params.VY, params.VZ, params.Shape));

            // reset initialise to stop pushing new object
            params.initialise = false;
        }
    }


    background(0);
    directionalLight(250, 250, 250, 1, 2, -3);

    // Earth
    push();
    translate(width/2, height/2, 0);
    rotateZ(millis()/1000);
    fill(90);
    texture(globe);
    sphere(30);
    pop();

    // For each asteroid pushed into the array do the following
    rocks.forEach (rock => {
        // Call asteroid(s) to canvas
        rock.render();

        // Check if the asteroid has entered Earth's atmosphere
        rock.checkOrbit();

        // IF the asteroid has entered the area
        if (rock.orbit && rock.pos.x <= width/2 + 200 && rock.pos.x >= width/2 - 200 && rock.pos.z <= 180 && rock.pos.z >= -180) {
            force = 0.98;
            // rotate asteroid towards Earth
            rock.rotateRock(rock.checkCenter());
            // move asteroid at the speed of vx, vy and vz
            rock.moveRock();
        // IF the asteroid has not enter the area
        } 
        else
        {
            // Re-assign force to the default value
            force = 0.01;

            // rotate asteroid towards Earth
            rock.rotateRock(rock.checkCenter());

            // accelerate asteroid in an angular motion around Earth
            // so it always re-bound back towards Earth
            rock.accelerateRock(cos(rock.rotation) * force, sin(rock.rotation) * force);

            // move asteroid at the speed of vx, vy and vz 
            rock.moveRock();

        }
    });

    // For each asteroid check if it has strike Earth
    // If so, remove that asteroid from the array
    rocks.forEach(function(rock, index) {
        if (rock.hitEarth()) {
            rocks.splice(index, 1);
        }
    });

    // Loop through rocks to see has any asteroid came 
    // into contact with one another
    for (let i = 0; i < rocks.length; i++) {
        for (let j = i + 1; j < rocks.length; j++) {
            // declare local variables
            let collision;
            // assign rock1 and rock2
            let rock1 = rocks[i];
            let rock2 = rocks[j];
            
            // Check for collisions between the two asteroids.
            collision = rockCollision(rock1.pos.x, rock1.pos.y, rock2.pos.x, rock2.pos.y);
    
            // if any collision has been made, 
            // make the impact and affected asteroid bounces off each other.
            if (collision <= rock1.size + rock2.size) {
                // console.log(collision);
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

// Check for keyboard events
function keyPressed() {
    // Press SPACEBAR to push a new Rock object into the array
    if (keyCode === 32) {
        // if pressed, push new Rock object into the array
        rocks.push(new Rock(random(1, 8), random(0, 1), random(0, 1), random(0, 1), "Sphere"));
    } else if (keyCode === 71) {
        // if 'G' is pressed, show/hide GUI
        gui.toggleVisibility();
    }
}

// Function to check for collision between the two points
function rockCollision(x1, y1, x2, y2) {
    let dist;

    dist = Math.sqrt(Math.abs((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)));

    return dist;
}