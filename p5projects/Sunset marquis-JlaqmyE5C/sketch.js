let x = 50;
let y = 50;
let stepSize = 4;
let angle = 30;

function setup() {
  createCanvas(400, 400);
  background(220);
  angle = random(0, TWO_PI);
  x = lx = random(width);
  y = ly = random(height);
}

function draw() {
  
  // step once in the direction of angle
  x = x + stepSize * cos(angle);
  y = y + stepSize * sin(angle);
  
  // wrap around the screen
  x = (x + width) % width;
  y = (y + height) % height;
  
  // occasionally adjust the angle
  if (frameCount % 10==9) {
    angle += random(-.1,.1);
  }
  
  // skip long lines across screen
  if (dist(x,y, lx,ly) <= stepSize*2) {
    line(x,y,lx,ly);
  }
  
  lx = x;
  ly = y;
}
