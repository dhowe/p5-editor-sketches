let xpos = 100;
let ypos = 100;
let xspd = 2;
let yspd = 1.4;
let rad = 10;

function setup() {

  createCanvas(400, 400);
}

function draw() {

  background(0);
  fill(255);
  ellipse(xpos, ypos, rad * 2, rad * 2);

  if (xpos > width - rad) {
    xspd *= -1;
  } else if (xpos < rad) {
    xspd *= -1;
  }

  if (ypos > height - rad) {
    yspd *= -1;
  } else if (ypos < rad) {
    yspd *= -1;
  }

  xpos += xspd;
  ypos += yspd;
}