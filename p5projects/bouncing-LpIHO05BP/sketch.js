let x=100, y=200, bg=0, radius=10, xspd, yspd;

function setup() {

  createCanvas(600, 400);

  // set the initial x,y speed
  xspd = random(3,5);
  yspd = random(3,5);
}

function draw() {

  background(bg);
  ellipse(x, y, radius*2, radius*2);

  // update the position based on speed
  x = x + xspd;
  y = y + yspd;

  // check collision with left/right wall
  if ((xspd > 0 && x >= width-radius) || (xspd < 0 && x <= radius)) {
    xspd = xspd * -1; // reverse speed
  }

  // check collision with top/bottom wall
  if ((yspd > 0 && y >= height-radius) || (yspd < 0 && y <= radius)) {
    yspd = yspd * -1; // reverse speed
  }
}
 