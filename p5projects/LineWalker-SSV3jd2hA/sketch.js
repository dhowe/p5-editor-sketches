let x,
  y,
  nx,
  ny,
  step = 20;

function setup() {
  createCanvas(400, 500);
  background(255);
  x = width / 2;
  y = height / 2;
  nx = x;
  ny = y;
}

function draw() {
  //background(255,16);
  let flip = floor(random(4));
  if (flip === 0) {
    nx = x + step;
  } else if (flip === 1) {
    nx = x - step;
  } else if (flip === 2) {
    ny = y + step;
  } else if (flip === 3) {
    ny = y - step;
  }
  stroke(0, 32);
  line(x, y, nx, ny);
  x = nx;
  y = ny;
}
