// walkers follow the mouse while also trying 
// to keep some distance from other walkers

class Walker {
  constructor(x = random(width), y = random(height)) {
    walkers.push(this);
    this.pos = createVector(x, y);
    this.vel = createVector(random(-1, 1), random(-1, 1));
    this.acc = createVector();
    this.maxForce = 0.5;
    this.maxSpeed = 2;
    this.r = 3;
  }

  seek(target) {
    let desiredVel = p5.Vector.sub(target, this.pos);
    //desiredVel.normalize();
    desiredVel.limit(this.maxSpeed);
    let steering = p5.Vector.sub(desiredVel, this.vel);
    steering.limit(this.maxForce);
    this.acc.add(steering);
  }

  separate() {
    let count = 0;
    let steering = createVector(); 
    walkers.forEach((w) => {
      let d = p5.Vector.dist(this.pos, w.pos);
      if (this != w && d < 40) {
        count++;
        let diff =  p5.Vector.sub(this.pos, w.pos);
        diff.div(d * d);
        steering.add(diff);
      }
    });
    if (count) {
      steering.div(count);
      steering.setMag(this.maxSpeed);
      steering.sub(this.vel);
      steering.limit(this.maxForce);
    }
    this.acc.add(steering);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  draw() {
    stroke(255);
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


const walkers = [],
  mouse = new p5.Vector();

function setup() {
  createCanvas(400, 400);
  background(0);
  for (let i = 0; i < 100; i++) {
    new Walker();
  }
}

function draw() {
  background(0);
  for (let i = 0; i < walkers.length; i++) {
    walkers[i].seek(mouse.set(mouseX, mouseY));
    walkers[i].separate();
    walkers[i].update();
    walkers[i].draw();
  }
}
