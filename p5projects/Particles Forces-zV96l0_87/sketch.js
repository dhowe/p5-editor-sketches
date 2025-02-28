const gravity = new p5.Vector(0, 0.66);
const WIND = new p5.Vector(0.1, 0);
const MU = 0.01;

class Walker {
  constructor(x = width / 2, y = height / 2, sz = 5) {
    walkers.push(this);
    this.pos = createVector(x, y);
    this.vel = createVector(0.5, 0);
    this.acc = createVector();
    this.r = random(5, 10);
    this.m = this.r * TWO_PI;
  }

  update(...forces) {
    this.acc.mult(0);

    if (forces) forces.forEach((f) => this.acc.add(f));

    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.vel.limit(30);

    // bounce off walls
    if (this.pos.y >= height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y *= -1;
    }
    if (this.pos.x >= width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -1;
    }
    if (this.pos.x <= this.r) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    }
  }

  draw() {
    noStroke();
    fill(255, this.alpha);
    circle(this.pos.x, this.pos.y, this.r * 2);
  }
}

const walkers = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 10; i++) {
    new Walker(random(width));
  }
}

function draw() {
  background(0);
  for (let i = 0; i < walkers.length; i++) {
    let wind = p5.Vector.div(WIND, walkers[i].m);
    let friction = createVector();
    if (walkers[i].pos.y > height - (walkers[i].r + 1)) {
      // apply friction
      friction = walkers[i].vel.copy();
      friction.normalize();
      friction.mult(-1);
      friction.setMag(MU * walkers[i].m);
    }
    walkers[i].update(gravity, friction);
    walkers[i].draw();
  }
}
