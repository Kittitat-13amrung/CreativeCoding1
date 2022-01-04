let molecules = [];


for (let i = 0; i < 1000; i++) {
    molecules.push(new Molecule);
}

let pythag= (_a, _b) => {return sqrt(_a*_a + _b*_b)};

function pythag2(_a,_b) {
    let distance = sqrt(_a*_a + _b*_b);

    return distance/2;
}


const apple = 3;
const banana = 2.5;
const reduction = .1;

let addMeUp = (a, b) => 
    {
        let sum = (apple * a) + (banana * b);

        return (a+b > 10 ? sum -= sum * reduction : sum);
    }

function setup() {
    createCanvas(500,500);

    background (255, 0, 0);
}

function draw() {
    background(255,0,0);

    for (let i = 0; i < molecules.length; i++) {
        molecules[i].render();
        molecules[i].move();
    }
    
}