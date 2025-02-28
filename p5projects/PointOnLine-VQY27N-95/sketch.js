let a = [20, 130],
  b = [350, 300];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  let t = map(sin(frameCount / 40), -1, 1, 0, 1);
  let t2 = map(cos(frameCount / 40), -1, 1, 0, 1);
  let pt = pointOnLine(a, b, t);
  let pt2 = pointOnLine2(a, b, t2);

  circle(pt[0], pt[1], 10);
  circle(pt2[0], pt2[1], 10);
  line(a[0], a[1], b[0], b[1]);
}

function pointOnLine(a, b, t) {
  let x = a[0] * (1.0 - t) + b[0] * t;
  let y = a[1] * (1.0 - t) + b[1] * t;
  return [x, y];
}

function pointOnLine2(a, b, t) {
  let theta = Math.atan2(b[1] - a[1], b[0] - a[0]);
  let d = dist(a[0], a[1], b[0], b[1]);
  let x = a[0] + cos(theta) * (t * d);
  let y = a[1] + sin(theta) * (t * d);
  return [x, y];
}





