let x = 220;
let xspd = 2;
let radius = 20;

function setup() {
  createCanvas(600, 400);
  noStroke();
  fill(250, 0, 0);
}

function draw() {
  background(235);

  if (x >= width - radius || x <= radius) {
    xspd = xspd * -1;
  }

  circle(x, 200, radius * 2);
  
  x = x + xspd;
}
