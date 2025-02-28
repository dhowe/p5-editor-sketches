
let x, y, angle;
let stepSize = 4;

function setup() {
  createCanvas(400, 400);
  angle = random(TWO_PI);
  x = random(width);
  y = random(height);
}

function draw() {
  
  // step once in the direction of angle
  x = x + stepSize * cos(angle);
  y = y + stepSize * sin(angle);
  
  // wrap around the screen
  x = (x + width) % width;
  y = (y + height) % height;
  
  // occasionally adjust the angle
  // if (frameCount % 10 == 1) {
  //   angle += random(-.1, .1);
  // }

  background(220);  
  circle(x,y,10);
}
