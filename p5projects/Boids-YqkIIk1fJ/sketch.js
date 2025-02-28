class Boid {
  constructor(x = random(width), y = random(height)) {
    boids.push(this);
    this.pos = createVector(x, y);
    this.vel = createVector(random(-1, 1), random(-1, 1));
    this.acc = createVector();
    this.maxForce = 0.5;
    this.maxSpeed = 4;
    this.r = 3;
  }

  seek(target) {
    let strength = 1;
    let desiredVel = p5.Vector.sub(target, this.pos);
    desiredVel.limit(this.maxSpeed);
    let sf = p5.Vector.sub(desiredVel, this.vel);
    sf.limit(this.maxForce);
    this.acc.add(sf.mult(strength));
  }

  // adjust steering toward the average (vel) heading of others nearby
  alignment() {
    let count = 0;
    let strength = 1.5;
    let perception = 25;
    let sf = createVector();
    boids.forEach((b) => {
      if (b === this) return;
      let d = p5.Vector.dist(this.pos, b.pos);
      if (d <= perception) {
        sf.add(b.vel);
        count++;
      }
    });

    if (count) {
      sf.div(count);
      sf.setMag(this.maxSpeed);
      sf.sub(this.vel);
      sf.limit(this.maxForce);
    }

    this.acc.add(sf.mult(strength));
  }

  // adjust steering toward the average (pos) of others nearby
  cohesion() {
    let count = 0;
    let strength = 0.9;
    let perception = 50;
    let sf = createVector();
    boids.forEach((b) => {
      if (this === b) return;
      let d = p5.Vector.dist(this.pos, b.pos);
      if (d <= perception) {
        sf.add(b.pos);
        count++;
      }
    });

    if (count) {
      sf.div(count);
      sf.sub(this.pos);
      sf.setMag(this.maxSpeed);
      sf.sub(this.vel);
      sf.limit(this.maxForce);
    }

    this.acc.add(sf.mult(strength));
  }

  // adjust steering to avoid others (pos) nearby 
  separation() {
    let count = 0;
    let strength = 1.5;
    let perception = 24;
    let sf = createVector();
    boids.forEach((b) => {
      if (this === b) return;
      let d = p5.Vector.dist(this.pos, b.pos);
      if (d < perception) {
        let diff = p5.Vector.sub(this.pos, b.pos);
        diff.div(d);
        sf.add(diff);
        count++;
      }
    });
    if (count) {
      sf.div(count);
      sf.setMag(this.maxSpeed);
      sf.sub(this.vel);
      sf.limit(this.maxForce);
    }
    this.acc.add(sf.mult(strength));
  }

  update() {
    this.alignment();
    this.cohesion();
    this.separation();

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);

    // wraparound left/right/top edge
    this.pos.x = (this.pos.x + width) % width;
    this.pos.y = (this.pos.y + height) % height;
  }

  draw() {
    const angle = this.vel.heading();
    const delta = 2.5;
    stroke(255);
    noFill();
    triangle(
      this.pos.x + cos(angle) * this.r,
      this.pos.y + sin(angle) * this.r,
      this.pos.x + cos(angle + delta) * this.r,
      this.pos.y + sin(angle + delta) * this.r,
      this.pos.x + cos(angle - delta) * this.r,
      this.pos.y + sin(angle - delta) * this.r
    );
  }
}

const boids = [],
  mouse = new p5.Vector();

function setup() {
  createCanvas(800, 600);
  background(0);
  for (let i = 0; i < 200; i++) {
    new Boid();
  }
}

function draw() {
  background(0);
  for (let boid of boids) {
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
      boid.seek(mouse.set(mouseX, mouseY));
    }
    boid.update();
    boid.draw();
  }
}
