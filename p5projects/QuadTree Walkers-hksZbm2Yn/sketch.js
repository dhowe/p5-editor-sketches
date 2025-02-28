let tree, walkers = [];

function setup() {
  createCanvas(600, 600);
  tree = new QuadTree(0, 0, width, height);
}

function draw() {
  background(220,12);
  
  walkers.forEach(w => w.update());
  
  tree.update(walkers);
  tree.draw();
  
  if (mouseIsPressed) {
    let ang = atan2(mouseY-pmouseY, mouseX-pmouseX);
    walkers.push(new Walker(mouseX, mouseY, ang));
  }
}

class Walker {
  constructor(x, y, angle) {
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.lean = random(-0.001, 0.001);
    this.speed = random(0.5, 1.5);
  }
  update() {
    this.x += cos(this.angle) * this.speed;
    this.y += sin(this.angle) * this.speed;
    this.x = (this.x + width) % width;
    this.y = (this.y + height) % height;
    this.angle += this.lean;
    return this;
  }
}
