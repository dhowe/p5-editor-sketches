let x = 200, y = 200, maxStep = 3;

function setup() {

  createCanvas(400, 400);
  noStroke();
  frameRate(30);
  createLoop({duration:10, gif:true,open:true})
}

function draw() {

  x += random(-maxStep, maxStep);
  y += random(-maxStep, maxStep);
  
  background(255);
  fill(50);
  circle(x, y, 20);
}