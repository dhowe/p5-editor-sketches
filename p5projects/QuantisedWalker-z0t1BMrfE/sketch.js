let x = 200;
let y = 200;
let stepSize = 5;

function setup() {
  createCanvas(512, 512);
  background(245);
}

function draw() {
  
  circle(x, y, 3);

  // move walker north, south, east or west
  let num = floor(random(0, 4));
  if (num == 0) {
    x = x + stepSize;
  } else if (num == 1) {
    x = x - stepSize;
  } else if (num == 2) {
    y = y + stepSize;
  } else if (num == 3) {
    y = y - stepSize;
  }
  
  // prevent walker from going off the canvas
  if (x < 0) x = 0;
  if (x > width) x = width;
  if (y < 0) y = 0;
  if (y > height) y = height;  
}
