let x, y;
let px = 0;
let py = 0;
let sx = 0;
let sy = 0;
let rad = 10;

function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = width / 2;
}

function draw() {
  background(220);
  circle(x, y, rad * 2);

  if (x > width - rad) sx *= -1;
  if (x < rad) sx *= -1;

  if (y > height - rad) sy *= -1;
  if (y < rad) sy *= -1;

  x = x + sx;
  y = y + sy;
}

function mousePressed() {
  let d = dist(mouseX, mouseY, x, y);
  if (d < rad) {
    px = mouseX;
    py = mouseY;
  }
}

function mouseReleased() {
  if (px > 0) {
    let spd = dist(mouseX, mouseY, pmouseX, pmouseY);
    sx = (mouseX - px) / 10;
    sy = (mouseY - py) / 10;
  }
  px = 0;
  py = 0;
}

function doubleClicked() {
    sx = 0;
    sy = 0;
}