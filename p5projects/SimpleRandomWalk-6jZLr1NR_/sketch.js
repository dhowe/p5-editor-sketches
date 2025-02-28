let x = 200;
let y = 200;

function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  x += random(-3, 3);
  y += random(-3, 3);

  background(255, 4);
  noStroke();
  fill(50);
  circle(x, y, 20);
}

function draw() {
  lx = x;
  ly = y;

  x = constrain(x + random(-5, 5), 0, width);
  y = constrain(y + random(-5, 5), 0, height);

  noFill();
  stroke(0);
  //background(255);
  line(x, y, lx, ly);
}
let lx, ly;
