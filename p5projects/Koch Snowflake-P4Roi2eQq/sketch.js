let count = 0;

function setup() {
  createCanvas(800, 800);
  noFill();
}

function draw() {
  background(220);

  // create an equilateral triangle
  let p1 = { x: width / 2, y: 10 };
  let p2 = { x: width - 50, y: height - 215 };
  let p3 = { x: 50, y: height - 210 };

  // draw a Koch curve on each side of the triangle
  kochCurve(p1, p2, count);
  kochCurve(p2, p3, count);
  kochCurve(p3, p1, count);
  
  noLoop();
}

function kochCurve(p, q, depth = 1) {
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
  count = (count + 1) % 8
  redraw();
}