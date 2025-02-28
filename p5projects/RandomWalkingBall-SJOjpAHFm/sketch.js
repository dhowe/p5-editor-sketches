let x = 200, y = 200, maxStep = 3;

function setup() {

  createCanvas(400, 400);
  noStroke();
}

function draw() {

  background(255);

  fill(50);
  circle(x, y, 20);
  
  x += random(-maxStep, maxStep);
  y += random(-maxStep, maxStep);
}