function setup() {
  createCanvas(400, 400);
  background(255);
  //circle(200, 200, 10)
  logo(200, 200, 50);
}

function logo(x, y, sz) {
  noFill();
  for (let i = 0; i < 3; i++) {
    circle(x - 10 + i * 10, y, sz);
  }
  ellipse(x, y - sz * 0.55, sz / 15, sz / 5);
}
