class Walker {
  
  constructor(x=200, y=200) {
    
    walkers.push(this);
    this.pos = createVector(x, y);
    this.last = this.pos.copy();
    this.vel = createVector(random(-1, 1), random(-1, 1));
    this.acc = createVector();
    this.r = random(1, 1);
  }

  update(...forces) {
    
    forces.forEach(f => this.acc.add(f));

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  draw() {
    stroke(255);
    if (dist(this.pos.x, this.pos.y, this.last.x, this.last.y) < 10) {
      line(this.pos.x, this.pos.y, this.last.x, this.last.y);
    }
    this.last = this.pos.copy();
  }
}

const walkers = [], attractors = [], maxSpeed = .1;

function attract(a, w) {
  let steering = p5.Vector.sub(a, w.pos.copy());
  steering.setMag(maxSpeed);
  w.acc.add(steering);
}

function mouseReleased() {
  attractors.push(createVector(mouseX, mouseY));
}

function setup() {
  createCanvas(400, 400);
  background(0);
  for (let i = 0; i < 300; i++) {
    new Walker();
  }
  for (let i = 0; i < 4; i++) {
    attractors.push(createVector(random(width), random(width)));
  }
}

function draw() {
  background(0, 24);
  attractors.forEach((a) => circle(a.x, a.y, 5));
  for (let i = 0; i < walkers.length; i++) {
    attractors.forEach((a) => attract(a, walkers[i]));
    walkers[i].update();
    walkers[i].draw();
  }
}


