let tree;
let walkers = [];

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  for (let i = 0; i < 20; i ++) {
    walkers.push(new Walker(random(100,700), random(100,700), random(360)));
  }
}

function draw() {
  background(220);
  tree = new QuadTree(0, 0, width, height);
  walkers.forEach((w) => tree.insert(w));
  //walkers.forEach((w) => w.render() );
  tree.render();
  //text(tree.size(), 10, 10);
  noLoop();
}

class Walker {
  constructor(x, y, angle) {
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.speed = random(1, 2);
  }
  update() {
    this.x += cos(this.angle) * this.speed;
    this.y += sin(this.angle) * this.speed;
    this.angle += random(-3, 3);
  }
  render() {
    stroke(0);
    circle(this.x, this.y, 5);
  }
}

class QuadTree {
  constructor(x, y, w, h, pts = []) {
    this.boundary = { x, y, w, h };
    this.capacity = 4;
    this.points = [];
    this.divided = false;
    pts.forEach((p) => this.insert(p));
  }

  size() {
    let num = this.points.length;
    if (this.divided) {
      num += (this.nw.size() + this.ne.size() + this.sw.size() + this.se.size());
    }
    return num;
  }

  render() {
    let { x, y, w, h } = this.boundary;
    noFill();
    stroke(0);
    rect(x, y, w, h);
    this.points.forEach((pt) => pt.render());
    if (this.divided) {
      this.nw.render();
      this.ne.render();
      this.sw.render();
      this.se.render();
    }
  }

  subdivide() {
    let { x, y, w, h } = this.boundary;
    this.nw = new QuadTree(x, y, w / 2, h / 2);
    this.ne = new QuadTree(x + w / 2, y, w / 2, h / 2);
    this.sw = new QuadTree(x, y + h / 2, w / 2, h / 2);
    this.se = new QuadTree(x + w / 2, y + h / 2, w / 2, h / 2);
    this.divided = true;
  }

  insert(pt) {
    if (!this.contains(pt)) return false;

    if (this.points.length < this.capacity) {
      this.points.push(pt);
      return true;
    }

    if (!this.divided && this.points.length === this.capacity) {
      this.subdivide();
    }

    if (this.divided) {
      return (
        this.nw.insert(pt) ||
        this.ne.insert(pt) ||
        this.sw.insert(pt) ||
        this.se.insert(pt)
      );
    }

    return true;
  }

  contains(pt) {
    let { x, y, w, h } = this.boundary;
    return pt.x >= x && pt.x <= x + w && pt.y >= y && pt.y <= y + h;
  }
}
