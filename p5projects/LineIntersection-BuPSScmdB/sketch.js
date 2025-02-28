function setup() {
  createCanvas(400, 400);
  background(240);
  noFill();
  let x1 = random(10, width - 10);
  let y1 = random(10, height - 10);
  let x2 = random(10, width - 10);
  let y2 = random(10, height - 10);
  line(x1, y1, x2, y2);
  let a1 = random(10, width - 10);
  let b1 = random(10, height - 10);
  let a2 = random(10, width - 10);
  let b2 = random(10, height - 10);
  line(a1, b1, a2, b2);
  let pt = intersects(x1, y1, x2, y2, a1, b1, a2, b2);
  if (pt) {
    circle(pt.x, pt.y, 10);
  }
  noLoop();
}

function drawx() {}

function intersects(x1, y1, x2, y2, a1, b1, a2, b2) {
  let { A: A1, B: B1, C: C1 } = toLineEq(x1, y1, x2, y2);
  let { A: A2, B: B2, C: C2 } = toLineEq(a1, b1, a2, b2);
  let det = A1 * B2 - A2 * B1;
  if (det != 0) {
    let x = (B2 * C1 - B1 * C2) / det;
    let y = (A1 * C2 - A2 * C1) / det;
    if (x < min(x1,x2) || x > max(x1,x2)) return;
    if (x < min(a1,a2) || x > max(a1,a2)) return;  
    if (y < min(y1,y2) || y > max(y1,y2)) return;
    if (y < min(b1,b2) || y > max(b1,b2)) return;
    return {x,y};
  }
}

function toLineEq(x1, y1, x2, y2) {
  let A = y2 - y1;
  let B = x1 - x2;
  let C = A * x1 + B * y1;
  return { A, B, C };
}
