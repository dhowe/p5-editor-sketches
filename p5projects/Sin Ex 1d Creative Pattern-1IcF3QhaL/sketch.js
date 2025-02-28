
let count = 30, stepSize;

function setup() {
  createCanvas(400, 400);
  noFill();
  stepSize = width / (count - 1);	
}

function draw() {
  background(frameCount/5 % 100, 32);
  for (let i = 0; i < count; i++) {
    let num = sin(frameCount / (50 + i));
    let sinval = map(num, -1, 1, 1, width);
    let sz = sinval - stepSize * i;
    stroke((frameCount/6 % 155) + 100);
    circle(200, 200, sz);
  }
}
