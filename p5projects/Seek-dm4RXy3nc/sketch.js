class Walker {
  constructor(x = random(width), y = random(height)) {
    walkers.push(this);
    this.target = createVector(x, y);
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(-1, 1), random(-1, 1));
    this.acc = createVector();
    this.maxForce = .5;
    this.maxSpeed = 3;
    this.r = 6;
  }
  
  seek() {
    let target = this.target;
    let desiredVel = p5.Vector.sub(target, this.pos);
    //desiredVel.normalize();
    desiredVel.limit(this.maxSpeed);
    let steering = p5.Vector.sub(desiredVel, this.vel);
    steering.limit(this.maxForce);
    this.acc = steering;
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

let font;
function preload() {
  font = loadFont('acmesa.ttf');
}
function setup() {
  createCanvas(800, 400);
  background(0);
  textSize(190);
  fill(255);
  let pts = font.textToPoints('Hello',50,250);
  pts.forEach(p => {
    //circle(p.x,p.y,5);
    new Walker(p.x,p.y); 
  });
}

function draw() {
  background(0);
  for (let i = 0; i < walkers.length; i++) {
    walkers[i].seek();
    walkers[i].update();
    walkers[i].draw();
  }
}
