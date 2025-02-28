class Walker {
  
  constructor(x=400, y=300) {
    
    walkers.push(this);
    this.pos = createVector(x, y);
    this.last = this.pos.copy();
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.r = random(1, 1);
    this.m = this.r * TWO_PI;
  }

  update() {
    this.acc.mult(0);

    attractors.forEach((a) => {
      this.acc.add(attract(a, this));
    });

    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  draw() {
    stroke(255);
    if (dist(this.pos.x, this.pos.y, this.last.x, this.last.y) < 10) {
      line(this.pos.x, this.pos.y, this.last.x, this.last.y);
    }
    this.last = this.pos.copy();
  }
}

const walkers = [];

function setup() {
  createCanvas(800, 600);
  background(0);
  for (let i = 0; i < 300; i++) {
    new Walker();
  }
}

function mouseReleased() {
  attractors.push(createVector(mouseX, mouseY));
}

function draw() {
  background(0, 24);
  attractors.forEach((a) => circle(a.x, a.y, 5));
  for (let i = 0; i < walkers.length; i++) {
    walkers[i].update();
    walkers[i].draw();
  }
}

let attractors = [];

function attract(a, w) {
  let desiredVel = p5.Vector.sub(a, w.pos.copy());
  let distSq = desiredVel.magSq();

  let steering = p5.Vector.sub(desiredVel, w.vel.copy());
  steering.setMag(1 / constrain(distSq, 5, 50));
  return steering;
}
