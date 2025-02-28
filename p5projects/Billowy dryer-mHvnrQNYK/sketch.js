function setup() {
  createCanvas(400, 400);
  noFill();
  angleMode(DEGREES);
}
function draw() {
  background(220);
  for (let j = 0; j < 20; j++) {
    for (let i = 0; i < 20; i++) {
      let degrees = (i / 20) * 360;
      let sval = sin(degrees + frameCount);
      let sz = map(sval, -1, 1, 1, 40);
      circle(i * 20 + 10, j * 20 + 10, sz);
    }
  }
}
