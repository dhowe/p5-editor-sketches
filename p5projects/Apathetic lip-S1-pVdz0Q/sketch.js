var x, y, xspd, yspd, radius=10;

function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height / 2
  xspd = random(-6, 6);
  yspd = random(-6, 6);
}

function draw() {
  background(0);
  ellipse(x, y, radius*2, radius*2);

  x = x + xspd;
  y = y + yspd;

  if ((xspd > 0 && x >= width-radius) || (xspd < 0 && x <= radius)) {
    xspd = xspd * -1;
  }

  if ((yspd > 0 && y >= height-radius) || (yspd < 0 && y <= radius)) {
    yspd = yspd * -1;
  }
}
