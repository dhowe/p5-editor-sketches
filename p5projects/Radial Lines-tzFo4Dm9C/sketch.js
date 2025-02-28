let radius = 200;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  background(220);
  for (let a = 0; a < 100; a++) {
    let angle = map(a, 0, 99, 0, 360);
    let x = 200 + cos(angle) * radius;
    let y = 200 + sin(angle) * radius;
    line(200,200,x,y);
  }
}
