let x = 120, y = 50, step = 3;

function setup() {
  createCanvas(400, 100);
}

function draw() {

  background(0, 32);
  fill(255);
  circle(x, 50, 20);

  x = noise(frameCount/100)*width;
}