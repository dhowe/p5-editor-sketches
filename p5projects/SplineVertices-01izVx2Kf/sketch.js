function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  background(245);
  noFill();

  beginShape();
  let steps = 36;
  for (let i = 0; i < 360; i += steps) {
    let x = width/2 + cos(i) * 100;
    let y = height/2 + sin(i) * 100;
    x += map(noise(i), 0, 1, -steps, steps);
    y += map(noise(i), 0, 1, -steps, steps);
    noFill();
    circle(x, y, 5);
    splineVertex(x, y);
  }
  endShape(CLOSE);
}
