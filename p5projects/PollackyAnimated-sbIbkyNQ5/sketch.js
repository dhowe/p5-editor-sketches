let buf, col = 0;
let count = 0;
let pidx = 0;
let gl = 0;

function setup() {
  createCanvas(900, 600, gl ? WEBGL : P2D);
  buf = createGraphics(width, height);
  pallette(25);
  c = new Curve(7);
  buf.strokeWeight(gl ? 1 : 2);
  buf.stroke(this.cols[pidx++]);
  frameRate(24);
}

function draw() {
  background(251, 246, 242);
  if (gl) translate(-width / 2, -height / 2, 0);
  buf.noFill();
  c.draw(buf);
  if (c.done() && ++count < 250) {
    col = this.cols[pidx++ % this.cols.length];
    buf.fill(col);
    buf.ellipse(
      random(c.bounds[0], c.bounds[2]),
      random(c.bounds[1], c.bounds[3]),
      random(2, 5), random(2, 5));
    buf.strokeWeight(gl ? random(0.1, 3) : random(2, 4));
    buf.stroke(col);
    c.reset(floor(random(5, 7)));
  }
  if (!gl) filter(DILATE);
  image(buf, 0, 0);
}

function pallette(num) {
  this.cols = [];
  for (let i = 0; i < 25; i++) {
    this.cols.push(random(10) < 7 ? 0 : color(
      random(156), random(156), random(156)));
  }
}

class Curve {

  constructor(num, bounds, minDist, maxDist) {
    this.reset(num, bounds, minDist, maxDist);
  }

  reset(num, bounds, minDist, maxDist) {
    this.id = Curve.Id++;
    this.cursor = 3;
    this.num = num || this.num || 4;
    this.minDist = minDist || this.minDist || 1;
    this.maxDist = maxDist || this.maxDist || 1000000;
    this.bounds = bounds || this.bounds || [
      width * 0.08, height * 0.125,
      width * 0.92, height * 0.875
    ];
    this.initPoints();
  }

  done() {
    return this.cursor === this.num;
  }

  initPoints() {
    this.xpts = [];
    this.ypts = [];
    let x = width / 2;
    let y = height / 2;
    let lx = width / 2;
    let ly = height / 2;
    for (let i = 0; i < this.num; i++) {
      let d = 0;
      while (d > this.maxDist || d < this.minDist) {
        x = random(this.bounds[0], this.bounds[2]);
        y = random(this.bounds[1], this.bounds[3]);
        d = dist(x, y, lx, ly);
      }
      this.xpts.push(x);
      this.ypts.push(y);
      lx = x;
      ly = y;
    }
  }

  step() {
    if (this.cursor < this.num) this.cursor++;
  }

  draw(g) {
    this.step();
    this.render(g);
  }

  render(g) {
    g = g || p5.instance;
    g.beginShape();
    for (let i = 0; i < this.cursor; i++) {
      g.curveVertex(this.xpts[i], this.ypts[i]);
    }
    g.endShape();
  }
}
Curve.Id = 0;