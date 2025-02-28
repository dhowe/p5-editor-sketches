let x = 220;
let xspd = 5
let radius = 20;
let y= 200;
let yspd = 5

// actually you are

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
if (y>= height - radius || y <= radius) {
    yspd = yspd * -1;
  }
  circle(x, y++, radius * 2);
  
  x = x + xspd;
  y = y + yspd;
}
