let x, y, sz;

function setup() {
  createCanvas(400, 400);
  noFill();
  x = random(100, 300);
  y = random(100, 300);
  sz = random(150, 250);
  background(245);
  strokeWeight(1);
  stroke(0);
  circle(x, y, sz);
  strokeWeight(3);
  stroke('red');
  for (let i = 0; i < 50; i++) {
    let theta = random(360);
    let stepSz = random(sz/2);
    let px = x + stepSz * cos(theta);
    let py = y + stepSz * sin(theta);
    point(px, py);
  }			
}
