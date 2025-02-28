
var x=100, y=200, radius=10, xspd, yspd;
var x2=100, y2=200, xspd2, yspd2;

function setup() {

  createCanvas(400, 400);
  background(255);
  
  // set the initial x,y speed
  xspd = random(1,6);
  yspd = random(1,6);
  xspd2 = random(1,6);
  yspd2 = random(1,6);
}

function draw() {

  //ellipse(x, y, radius*2, radius*2);
  //ellipse(x2, y2, radius*2, radius*2);
  
  // draw a line between the balls
  var d = dist(x2, y2,x, y);
  stroke(d,255-d);
  line(x,y,x2, y2);

  // ball 1
  // update the position based on speed
  x = x + xspd;
  y = y + yspd;

  // check collision with left/right wall
  if ((xspd > 0 && x >= width-radius) || (xspd < 0 && x <= radius)) {
    xspd = xspd * -1;
  }

  // check collision with top/bottom wall
  if ((yspd > 0 && y >= height-radius) || (yspd < 0 && y <= radius)) {
    yspd = yspd * -1;
  }
  
  // ball 2
  // update the position based on speed
  x2 = x2 + xspd2;
  y2 = y2 + yspd2;

  // check collision with left/right wall
  if ((xspd2 > 0 && x2 >= width-radius) || (xspd2 < 0 && x2 <= radius)) {
    xspd2 = xspd2 * -1;
  }

  // check collision with top/bottom wall
  if ((yspd2 > 0 && y2 >= height-radius) || (yspd2 < 0 && y2 <= radius)) {
    yspd2 = yspd2 * -1;
  }
}