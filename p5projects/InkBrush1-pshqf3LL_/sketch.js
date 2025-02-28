let x = 0, y = 0;
let px = 0, py = 0;
let strokeWidth = 0;

function setup() {

  createCanvas(400, 400);
  background(230);
  stroke(0);
  x = px = width / 2;
  y = py = height / 2;
}

function draw() {
  if (mouseX <= 0 || mouseY <= 0) return;

  x = lerp(x, mouseX, .1);
  y = lerp(y, mouseY, .1);

  if (mouseIsPressed) {
    strokeWidth = lerp(strokeWidth, dist(x, y, px, py), .1);
    strokeWeight(max(0.1, 10 - strokeWidth));
    line(x, y, px, py);
  }

  px = x;
  py = y;
}