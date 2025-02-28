let walkers = [];

class LerpWalker {
  constructor(x, y, sz) {
    this.x = x;
    this.y = y;
    this.size = sz;
    this.tx = random(width);
    this.ty = random(height);
    this.id = walkers.length;
  }
  render() {
    noStroke();
    fill(0);
    circle(this.x, this.y, 3);
  }
  update() {
    this.x = lerp(this.x, this.tx, 0.005);
    this.y = lerp(this.y, this.ty, 0.005);

    if (dist(this.x, this.y, this.tx, this.ty) < 5) {
      this.tx = random(width);
      this.ty = random(height);
    }
    if (random(300) < 1) {
      walkers.push(new LerpWalker(this.x, this.y, 3));
      if (walkers.length > 20) {
        walkers.shift();
      }
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(220);
  walkers.push(new LerpWalker(100, 100, 20));
  walkers.push(new LerpWalker(300, 300, 20));
}

function draw() {
  //background(220, 16);
  stroke("red");

  for (let i = 0; i < walkers.length; i++) {
    walkers[i].update();
    walkers[i].render();
  }
  fill(255);
  rect(0,0,40,40)
  fill(0);
  text(walkers.length, 20,20);
}

function render(fred) {
  fill("black");
  circle(fred.x, fred.y, fred.size);
  fill("red");
  circle(fred.tx, fred.ty, fred.size / 2);
}
