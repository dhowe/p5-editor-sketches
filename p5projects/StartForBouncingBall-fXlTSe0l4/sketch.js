let x = 50;
let rad = 10;
let xspeed = 2; 

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(235);
  ellipse(x, 50, rad * 2);
  
  // update position based on speed
  x = x + xspeed;
  
  if (x > width - rad) { // bounce off right side
    xspeed = -2;
  }
  
  // bounce off left-side
  
  // bounce off top and bottom
}
