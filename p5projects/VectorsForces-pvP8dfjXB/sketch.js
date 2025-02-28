class Walker {

  constructor(x = width / 2, y = height / 2, sz = 5) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-0.5, 0.5), random(-5, -8));
    this.acc = createVector();
    this.r = 5; //floor(random(1,10));
    walkers.push(this);
  }

  update(forces) {
    if (forces) {
      for (let i = 0; i < forces.length; i++) {
        this.acc.add(forces[i]);
      }
    }
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.set(0, 0);

    // wraparound left/right/top edge
    this.pos.x = (this.pos.x + width) % width;
    if (this.pos.y > height-this.r && this.vel.y > 0) {
      this.vel.y *= -.7;
    }
    //this.pos.y = (this.pos.y + height) % height;
  }

  draw() {
    noStroke();
    fill(0, 32); //,16);
    circle(this.pos.x, this.pos.y, this.r * 2);
    const angle = this.vel.heading();
    const delta = 2.5;
    stroke(0);
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

const GRAVITY = new p5.Vector(0, 0.098);

const walkers = [];

function setup() {
  createCanvas(400, 400);
  // for (let i = 0; i < 10; i++) {
  //   walkers.push(new Walker());
  // }
}

function draw() {
  background(220);
  if (mouseIsPressed) new Walker(mouseX, mouseY);
  for (let i = 0; i < walkers.length; i++) {
    let mass = walkers[i].r;
    let G = p5.Vector.mult(GRAVITY, 10 / mass);
    if (frameCount === 5) console.log(i, mass, G);
    walkers[i].update([G]);
    walkers[i].draw();
  }
}
