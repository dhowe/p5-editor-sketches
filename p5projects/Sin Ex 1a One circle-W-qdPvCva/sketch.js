
function setup() {
  createCanvas(400, 400);
  noFill();
}

function draw() {
  background(255);
  
  // get the sin of frameCount (which is continually increasing)
  // to make it go up more slowly, we divide by something (50 in this case)
  let num = sin(frameCount / 50);
  
  // map the result of sin (which varies from -1 to 1)
  // to the range we want (1 to 400 pixels)
  let diam = map(num, -1, 1, 1, 400)
  
  // finally, draw the circle
  circle(200, 200, diam);
}
