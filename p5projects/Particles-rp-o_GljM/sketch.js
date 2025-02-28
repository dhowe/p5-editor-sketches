class Walker {
  
  constructor(x = width / 2, y = height / 2, sz = 5) {
    walkers.push(this);
    this.pos = createVector(x, y);
    this.vel = createVector(random(-1, 1), random(-5, -3));
    this.alpha = 200;
    this.r = random(3,10);
  }

  update() {
    this.pos.add(this.vel);
    this.vel.y += .098;
    
    //this.alpha -=2;
    
    // wraparound left/right/top edge
    this.pos.x = (this.pos.x + width) % width;
    if (this.vel.y>0 && this.pos.y >= height-this.r) {
      this.vel.y *=-.8;
    }
  }

  draw() {
    noStroke();
    fill(255,this.alpha);
    circle(this.pos.x, this.pos.y, this.r * 2);
  }
}

const walkers = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  if (mouseIsPressed) {
    new Walker(mouseX, mouseY);
  }
  for (let i = 0; i < walkers.length; i++) {
    walkers[i].update();
    walkers[i].draw();
  }
}
