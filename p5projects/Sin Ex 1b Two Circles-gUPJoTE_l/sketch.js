function setup() {
  createCanvas(400, 400);
  noFill();
}

function draw() {
  background(255);
  
  // same as previous
  let num = sin(frameCount / 50);
  let diam = map(num, -1, 1, 1, 400)
  circle(200, 200, diam);
  
  // same as previous, but using cos() instead of sin()
  num = cos(frameCount / 50);
  diam = map(num, -1, 1, 1, 400)
  circle(200, 200, diam);
}
