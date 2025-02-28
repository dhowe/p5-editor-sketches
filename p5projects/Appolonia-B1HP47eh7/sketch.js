
var rads, theta = 30;
var r = 200;
var h = 200;
var k = 200;

function setup() {
  createCanvas(400, 400);
  frameRate(10);
}

function draw() {

  background(225);
  noFill();
  ellipse(h, k, width);
  
  r = (mouseX/width)*300;
  
  ellipse(h, k/2, r);
  
  rads = radians(30);
  x = h + r * cos(rads);
  y = k + r * sin(rads);
  //line(h, k, x, y);
  ellipse((width-r)+h+(x-h)/2,k+(y-k)/2, r);
  
  rads = radians(150);
  x = h + r * cos(rads);
  y = k + r * sin(rads);
  //line(h, k, x, y);
  ellipse(h+(x-h)/2,k+(y-k)/2, r);
}