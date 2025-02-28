let col, x, y, d;

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(220);

  let gx = -1000; // offscreen
  let gy = -1000; // offscreen
  for (i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {

      if ((i + j) % 3 == 0) {
        col = 0;
      } else {
        col = 255;
      }
      x = 20 + i * 40;
      y = 20 + j * 40;
      fill(col);
      circle(x, y, 40);

      d = dist(mouseX, mouseY, x, y);
      if (d <= 20) {
        gx = x;
        gy = y;
      }
    }
  }
  if (mouseIsPressed) {
    fill(255, 0, 0);
    circle(gx, gy, 40);
  }
}