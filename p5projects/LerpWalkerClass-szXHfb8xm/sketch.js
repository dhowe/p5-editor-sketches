class LerpWalker {
  constructor(x, y, sz) {
    this.x = x;
    this.y = y;
    this.size = sz;
    this.tx = random(width);
    this.ty = random(height);
  }
  update() {
    this.x = lerp(this.x, this.tx, 0.05);
    this.y = lerp(this.y, this.ty, 0.05);

    if (dist(this.x, this.y, this.tx, this.ty) < 5) {
      this.tx = random(width);
      this.ty = random(height);
    }
  }
}

let walker, walker2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  walker = new LerpWalker(100, 100, 20);
  walker2 = new LerpWalker(300, 300, 20);
}

function draw() {
  background(220, 16);

  walker.update()
  walker2.update();

  stroke("red");
  line(walker.x, walker.y, walker2.x, walker2.y);
}

function render(fred) {
  fill("black");
  circle(fred.x, fred.y, fred.size);
  fill("red");
  circle(fred.tx, fred.ty, fred.size / 2);
}
