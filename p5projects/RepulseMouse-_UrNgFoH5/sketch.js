class Walker {
  constructor(x = 200, y = 200) {
    walkers.push(this);
    this.pos = createVector(x, y);
    this.last = this.pos.copy();
    this.vel = createVector(random(-1, 1), random(-1, 1));
    this.acc = createVector();
    this.r = random(1, 1);
    this.m = this.r * TWO_PI;
  }

  update() {
    this.acc.mult(0);
    attractors.forEach((a) => {
      this.acc.add(attract(a, this));
    });
    if (mouseIsPressed) {
      this.acc.add(repulse(this));
      //this.acc.add(attract(createVector(mouseX,mouseY), this).mult(-2));
    }
    this.acc.limit(.1);
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
const attractors = [];
const mouse = new p5.Vector();
const maxSpeed = .03;

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
  if (mouseIsPressed) {
    noFill();
    stroke(200,0,0);
    circle(mouseX, mouseY, 10);
  }
  for (let i = 0; i < walkers.length; i++) {
    walkers[i].update();
    walkers[i].draw();
  }
}

function repulse(w) {
  mouse.set(mouseX, mouseY);
  return attract(mouse, w).mult(-2);
}

function attract(a, w) {
  let steering = p5.Vector.sub(a, w.pos.copy());
  steering.setMag(maxSpeed);
  return steering;
}
