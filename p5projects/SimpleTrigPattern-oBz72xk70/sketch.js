let y = 200;

function setup() {

  createCanvas(400, 400);
  fill(255);
  stroke(255);
}

function draw() {

  background(y,32);
  y = sin(millis()/100) * 100;
  x = cos(frameCount/19) * 100;
  fill(255-y);
  circle(200 + x, 200 + y, y);
}