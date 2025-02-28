let x = 200, y = 200

function setup() {

  createCanvas(400, 400);
  noStroke();
}

function draw() {

  background(255,64);
  
  fill(50);
  ellipse(x, y, 30, 30);
  x += noise(frameCount/100) -.5;
  y += noise(frameCount/90) -.5;
}