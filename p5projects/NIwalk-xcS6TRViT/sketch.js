let bounds;

function setup() {
  createCanvas(400, 400);
  background(220);
  angleMode(DEGREES);
  bounds = new Bounds(10, 10, width - 20, height - 20);
  for (let i = 0; i < 30; i++) {
    let pt = bounds.pointInside();
    walker = new Walker(...pt, random(360));
  }
}

function draw() {
  background(240);
  bounds.render();
  Walker.instances.forEach((w) => {
    w.step();
    w.render(2);
  });
}

class Bounds {
  constructor(x, y, w, h) {
    this.data = [x, y, w, h];
    this.lines = [
      [x, y, x + w, y],
      [x + w, y, x + w, y + h],
      [x + w, y + h, x, y + h],
      [x, y + h, x, y],
    ];
  }
  asLines() {
    return this.lines;
  }
  lineIntersects(line) {
    for (let i = 0; i < this.lines.length; i++) {
      if (linesIntersect(line, this.lines[i])) {
        return true;
      }
    }
    return false;
  }
  pointInside() {
    let r = bounds.data;
    return [random(r[0], r[0] + r[2]), random(r[1], r[1] + r[3])];
  }
  render() {
    this.lines.forEach((l) => line(...l));
  }
}

class Walker {
  constructor(x, y, angle) {
    this.x = x;
    this.y = y;
    this.done = false;
    this.theta = angle;
    this.path = [[this.x, this.y]];
    Walker.instances.push(this);
  }
  asLine(end) {
    let last = end || this.path[this.path.length - 1];
    let first = this.path[0];
    return [...first, ...last];
  }
  step(len = 1) {
    if (this.done) return;
    let next = [this.x + cos(this.theta) * len, this.y + sin(this.theta) * len];
    let candLine = this.asLine(next);
    for (let i = 0; i < Walker.instances.length; i++) {
      let w = Walker.instances[i];
      if (w === this) continue;
      if (
        bounds.lineIntersects(candLine) ||
        linesIntersect(candLine, w.asLine())
      ) {
        this.done = true;
        return true;
      }
    }

    //circle(...next,3);
    this.x = next[0];
    this.y = next[1];
    this.path.push([this.x, this.y]);
    return true;
  }
  render() {
    if (this.done) {
      line(...this.asLine());
      return;
    }
    for (let i = 1; i < this.path.length; i++) {
      line(...this.path[i - 1], ...this.path[i]);
    }
  }
}
Walker.instances = [];

function linesIntersect(l1, l2) {
  //return _linesIntersect(l1.x1,l1.y1,l1.x2,l1.y2,l2.x1,l2.y1,l2.x2,l2.y2);
  let pt = lineIntersection(...l1, ...l2);
  if (pt[0] < 0 || pt[0] > width) return false;
  if (pt[1] < 0 || pt[1] > height) return false;
  return pt;
}

function lineIntersection(x1, y1, x2, y2, x3, y3, x4, y4) {
  // calculate the distance to intersection point
  let uA =
    ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) /
    ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
  let uB =
    ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) /
    ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));

  // if uA and uB are between 0-1, lines are colliding
  if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {
    // optionally, draw a circle where the lines meet
    let intersectionX = x1 + uA * (x2 - x1);
    let intersectionY = y1 + uA * (y2 - y1);
    return [intersectionX, intersectionY];
  }
  return false;
}
