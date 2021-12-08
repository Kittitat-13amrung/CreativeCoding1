class Planet {
    constructor(radius, distance, orbitSpeed) {
        this.v = p5.Vector.random3D();
        this.radius = radius;
        this.angle = random(0, TWO_PI);
        this.distance = distance;
        this.v.mult(distance);
        this.planets = [];
        this.orbitSpeed = orbitSpeed;
    }

    spawnMoons(total, level) {
        for (let i = 0; i < total; i++) {
            let r = this.radius / (level * 1.2);
            let d = random((this.radius + r), (this.radius + r)*2);
            let o = random(-0.1, 0.1);
            this.planets[i] = new Planet(r, d, o);
            if (level < 0) {
                let num = random(0, 4);
                this.planets[i].spawnMoons(num, level);
            }
        }
    }

    orbit() {
        this.angle += this.orbitSpeed;

        if (this.planets != null) {
            for (let i = 0; i < this.planets.length; i++) {
                this.planets[i].orbit();
            }
        }
    }

    render() {
        push();
        
        let v2 = createVector(1, 0, 1);
        let p = this.v.cross(v2);
        p.mult(5);
        // console.log(p);
        rotate(this.angle, p.x, p.y, p.z);
        // fill(255);
        stroke(255);
        // line(0, 0, 0, this.v.x*10, this.v.y*10, this.v.y*10, this.v.z*10);
        // line(0, 0, 0, v.x*10, v.y*10, v.y*10, v.z*10);
        
        translate(this.v.x, this.v.y, this.v.z);
        noStroke();
        // ellipse(0, 0, this.radius * 2, this.radius *2);
        sphere(this.radius);

        if (this.planets != null) {
            for (let i = 0; i < this.planets.length; i++) {
                this.planets[i].render();
            }
        }
        pop();
    }
}