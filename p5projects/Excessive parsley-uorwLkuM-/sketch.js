
function setup() {
  createCanvas(800, 400);
  background(240);
  noFill();
  for (let i = 0; i < 8; i++) {
    squarcle(50 + i * 100, 200, 100);
  }
}

function squarcle(x, y, sz) {

  rectMode(CENTER);
  square(x, y, sz);
  circle(x, y, sz);
  square(x, y, sz/2 * sqrt(2));  
}
