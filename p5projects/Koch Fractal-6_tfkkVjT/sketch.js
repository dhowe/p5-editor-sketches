
let count = 0;

function setup() {
  createCanvas(800, 400);
  noFill();
}
function draw() {
  background(220);
  let p = { x: 50, y: 200 };
  let q = { x: 750, y: 350 };
  kochCurve(p, q, count);
  noLoop();
}

function kochCurve(p, q, depth=1) {
  if (depth === 0) {
    line(p.x, p.y, q.x, q.y);
    return;
  }
  else {
    let [a, b, c, d, e] = kochPoints(p, q);
    kochCurve(a, b, depth - 1);
    kochCurve(b, c, depth - 1);
    kochCurve(c, d, depth - 1);
    kochCurve(d, e, depth - 1);
  }
}

// returns the 5 points of the Koch curve
function kochPoints(a, e) {

  // b is 1/3 of the way from a to e
  let b = { x: lerp(a.x, e.x, 1 / 3), y: lerp(a.y, e.y, 1 / 3) };

  // e is 2/3 of the way from a to e
  let d = { x: lerp(a.x, e.x, 2 / 3), y: lerp(a.y, e.y, 2 / 3) };

  // step is the length of each of the line segments
  let step = dist(b.x, b.y, d.x, d.y);

  // theta is the angle of the line segment from b to c
  let theta = atan2(d.y - b.y, d.x - b.x) - radians(60);
  
  let c = { // c is 'step' distance from b in the direction of 'theta'
    x: b.x + cos(theta) * step,
    y: b.y + sin(theta) * step
  }
  return [a, b, c, d, e];
}

function mouseClicked() {
  count = (count+1) % 8
  redraw();
}
