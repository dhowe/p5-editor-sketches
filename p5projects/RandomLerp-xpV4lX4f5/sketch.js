let x = 200,
  y = 200,
  tx,
  ty;
function setup() {
  createCanvas(400, 400);
  tx = random(width);
  ty = random(height);
}

function draw() {
  background(200);
  stroke(0);
  noFill();
  x = lerp(x, tx, 0.05);
  y = lerp(y, ty, 0.05);
  if (dist(x, y, tx, ty) < 5) {
    tx = random(-width / 2, width * 1.5);
    ty = random(-height / 2, height * 1.5);
  }
  circle((x+width) % width, (y+height) % height, 30);
}
