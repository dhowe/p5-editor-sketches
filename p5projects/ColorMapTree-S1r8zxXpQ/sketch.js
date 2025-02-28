class Branch {
  constructor(begin, end, strokeW, col, angle) {
    this.begin = begin;
    this.end = end;
    this.angle = angle;
    this.strokeW = strokeW;
    this.col = col;
  }
  display() {
    stroke(this.col);
    strokeWeight(this.strokeW);
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
  }
  right(angle) {
    let direction = p5.Vector.sub(this.end, this.begin);
    direction.rotate(angle);
    let nextPoint = p5.Vector.add(direction, this.end);
    let nextColor = color.apply(this, this.col.levels.map(x =>  x * 0.75));
    return new Branch(this.end, nextPoint, this.strokeW * 0.7, nextColor);
  }
}

let trunk, tree = [];

function setup() {
  createCanvas(400, 400);
  background(20);
  let x = createVector(width / 2, height);
  let y = createVector(width / 2, height - 100);
  trunk = new Branch(x, y, 7, color(255, 100, 100));
  tree[0] = trunk;
  tree.push(trunk);
}

function draw() {
  for (let i = 0; i < tree.length; i++) {
    tree[i].display();
  }
}

function mousePressed() {
  for (let i = tree.length - 1; i >= 0; i--) {
    tree.push(tree[i].right(Math.PI / 6, 0.6));
    tree.push(tree[i].right(-Math.PI / 6, 0.6));
  }
}
