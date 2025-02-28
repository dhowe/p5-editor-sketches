let x = [],
  y = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  if (mouseIsPressed) {
    x.push(mouseX);
    y.push(mouseY);
  }

  noFill();
  beginShape();
  // first point
  vertex(x[0], y[0]);

  // each point with control points
  for (let i = 1; i < x.length - 2; i++) {
    const xCtrl = (x[i] + x[i + 1]) / 2;
    const yCtrl = (y[i] + y[i + 1]) / 2;
    quadraticVertex(x[i], y[i], xCtrl, yCtrl);
  }

  let len = x.length;
  if (len >= 2) { // last point
    quadraticVertex(x[len - 2], y[len - 2], x[len - 1], y[len - 1]);
  }
  endShape();
}
