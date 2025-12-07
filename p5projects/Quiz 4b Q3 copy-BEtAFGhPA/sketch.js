let r, g, b = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(r,g,b)
  
  r = 255;
  b = g = map(mouseX, 0, width, 255, 0);
}