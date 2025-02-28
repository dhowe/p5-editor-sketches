let s, col, blurState = false;

function setup() {
  createCanvas(400, 400);
  background(220);
  noStroke();
  col = color(255, 0, 0);
  s = 50;
}

function draw() {
  background(220);
  fill(col);
  circle(mouseX, mouseY, s);
  if (blurState) {
    filter(BLUR, 40, true);
  }
}

function mousePressed() {
  col = color(0, 0, 255);
  s = 100;
  blurState = true;
}

function mouseReleased() {
  col = color(255, 0, 0);
  s = 50;
  blurState = false;
}
