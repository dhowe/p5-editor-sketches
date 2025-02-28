let x = 256,
  y = 256,
  angle,
  stepSize = 3;

function setup() {
  createCanvas(512, 512);
  angleMode(DEGREES);
  angle = 270;
}

function draw() {
  background(245,16);

  circle(x, y, 10);
  // step once in the direction of the angle
  x = x + stepSize * cos(angle);
  y = y + stepSize * sin(angle);
  
  angle += random(-.3, -.3);
  
  x = (x+width) %width;
  y = (y+height) %height;
}
