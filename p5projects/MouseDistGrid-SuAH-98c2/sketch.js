function setup() {
  createCanvas(600, 480);
}

function draw() {
  background(220);
  for (let j = 0; j < 48; j++) {
    for (let i = 0; i < 60; i++) {
      let x = 5 + i * 10;
      let y = 5 + j * 10;
      let d = dist(x, y, mouseX, mouseY);
      fill(255, d, d);
      circle(x, y, 10);
    }
  }
}
