let x = [], y = [];

function setup() {
  createCanvas(400, 400);
  noFill();
}

function draw() {
  background(200);

  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < 9; j++) {
      circle(x[i], y[i], (j + 1) * 5);
      y[i] += 0.1;
    }
  }
}

function mouseClicked() {
  x.push(mouseX);
  y.push(mouseY);
}
