let x = [],
  y = [],
  angle = [],
  stepSize = [];

function setup() {
  createCanvas(512, 512);
  angleMode(DEGREES);
  noStroke();
  fill(0);
  for (let i = 0; i < 100; i++) {
    x[i] = width / 2;
    y[i] = width / 2;
    angle[i] = random(360);
    stepSize[i] = random(1, 3);
  }
}

function draw() {
  background(245, 32);

  for (let i = 0; i < x.length; i++) {
    circle(x[i], y[i], 10);
    // step once in the direction of the angle
    x[i] = x[i] + stepSize[i] * cos(angle[i]);
    y[i] = y[i] + stepSize[i] * sin(angle[i]);

    angle[i] += random(-1, 1);

    x[i] = (x[i] + width) % width;
    y[i] = (y[i] + height) % height;
  }
}
