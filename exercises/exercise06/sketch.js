let molecules = [];

function setup() {
    createCanvas(500, 500);
    
    // push molecules into the array 5 times
    for(let i = 0; i < 5; i++) {
        molecules.push(new Molecule());
    }
    
    background(255);
    // console.log(molecules);
    
    // The posX value of the 3rd item in the array (i=2)
    console.log(molecules[2].posX);
    
    // The xSpeed value of the 1st item in the array (i=0)
    console.log(molecules[0].xSpeed);
    
    // Changing the value of the object
    molecules[4].setRadius(40);
    
    // log the result
    console.log(molecules[4].radius);

}

function draw() {
    background(255);

    // for each molecule, render it out
    molecules.forEach(molecule => molecule.render()); 

}
