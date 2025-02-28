let x = 200, y = 200, diam = 50;

function setup() {
  createCanvas(400, 400);
  fill(0);
}

function draw() {
  background(255);
  
  // get some noise values
  let nx = noise(frameCount/100);
  let ny = noise(50+frameCount/99);
  let dx = noise(100+frameCount/200);
  
  // map them to the range we want
  diam = map(dx, 0, 1, 10, 100);
  x = map(nx, 0, 1, diam/2, width-diam/2);
  y = map(ny, 0, 1, diam/2, height-diam/2);
  
  // and draw the circle
  circle(x, y, diam);
}
