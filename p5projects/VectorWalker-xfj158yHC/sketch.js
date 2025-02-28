class Walker {
  
  constructor(x = width / 2, y = height / 2, sz = 5) {
    walkers.push(this);
    this.pos = createVector(x, y);
    this.vel = createVector(random(-1, 1), random(-1, 1));
    this.r = 8;
  }

  update() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);

    // wraparound left/right/top edge
    this.pos.x = (this.pos.x + width) % width;
    this.pos.y = (this.pos.y + height) % height;
  }

  draw() {
    noStroke();
    fill(0,100);
    circle(this.pos.x, this.pos.y, this.r * 2);
  }
}

const walkers = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 100; i++) {
    new Walker();
  }
}

function draw() {
  background(220);
  if (mouseIsPressed) {
    new Walker(mouseX, mouseY);
  }
  for (let i = 0; i < walkers.length; i++) {
    walkers[i].update();
    walkers[i].draw();
  }
}
