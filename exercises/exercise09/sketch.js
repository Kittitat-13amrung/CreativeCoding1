// canvas size
let screenWidth = 500;
let screenHeight = 500;

// alien variables
let aliens = [];
let alienWidth = 20;
let alienHeight = 20;
let alienVelocity = 1;
let numCols = 12;
let numRows = 7;
let hSpace = 30;
let vSpace = 30;
let xOffset = (screenWidth - (numCols - 1) * hSpace) / 2;
let yOffset = 20;
let shiftDown = 40;
let alienImg;

// shooter variables
let shooter;
// let shooterVelocity = 1;
let shooterWidth = 100;
let shooterHeight = 20;
let bullets = [];
let bulletWidth = 10;
let bulletHeight = 10;
let bulletVelocity = 1;

// particle emitter
let emitters = [];

function preload() {
    alienImg = loadImage('assets/spaceInvaders.png');
}

function setup() {
    populateAlien();
    shooter = new Shooter(screenWidth /2, screenHeight - shooterHeight / 2);
    createCanvas(screenWidth, screenHeight);
    background(255);
}

function draw() {
    background(0);
    let shift = false;

    // for each emitter do the following
    emitters.forEach(emitter => {
        emitter.createParticles();
        emitter.update();
        emitter.render();
    });

    // render and move shooter class
    shooter.render();
    shooter.move();

    // for each aliens, do the following
    aliens.forEach (alien => {
        alien.render();
        alien.move();

        // if alien position went off the screen
        alien.pos.x >= screenWidth ? shift = true: null;
        alien.pos.x <= 0 ? shift = true: null;
    });

    // if aliens went off screen is true shift alien downward
    shift ? aliens.forEach (alien => {
        alien.shift();
    }):null;

    // for loop to call bullet class
    for(let i = bullets.length - 1; i >= 0; i--) {
        bullets[i].move();
        bullets[i].render();
        // if bullets hit alien, remove both and push emitter
        for (let j = aliens.length - 1; j >= 0; j--) {
            if (bullets[i].hits(aliens[j])) {
                let tempPos = aliens[j].pos;
                aliens.splice(j, 1);
                bullets.splice(i, 1);
                emitters.push(new Emitter(tempPos.x, tempPos.y));
                break;
            }
        }
    }
}

// Key Pressed eventlistner
function keyPressed() {
    // change shooter direction
    if (keyCode === RIGHT_ARROW) {
        shooter.setDirection(1);
    } else if (keyCode === LEFT_ARROW) {
        shooter.setDirection(-1);
    } 
    // push bullet when press space
    if (keyCode === 32) {
        bullets.push(new Bullet(shooter.pos.x, 475));
    }

}

// function to spawn aliens on canvas in a row and column
function populateAlien() {
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            aliens.push(new Alien(col * hSpace + xOffset, row * vSpace + 10));
        }
    }
}