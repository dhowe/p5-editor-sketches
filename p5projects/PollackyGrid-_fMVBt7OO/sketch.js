let border = 75;
let steps = 4;
let seed,
  total = 10;
let sw = 2;
let bounds = [0, 0, 200, 200];
let g;
function setup() {
  createCanvas(900, 600);
  background(251, 246, 242);
  seed = Date.now();
  image(curvedLine(width, height),0,0);
}

function drawX() {
  // background(251, 246, 242);
  rect(...bounds);
  randomSeed(seed);
  curvedLine(g);
  filter(DILATE);
  if (steps++ === total) {
    total = floor(random(10, 20));
    background(251, 246, 242);
    steps = 4;
    seed = Date.now();
    image(g, 0, 0);
    noLoop();
  }
}

function curvedLine(w, h) {
  let g = createGraphics(w,h);
  let sw = random(1.5, 3);
  let num = floor(random(14, 24));
  randomSeed(seed);
  for (let i = 0; i < num; i++) {
    g.noFill();
    g.stroke(0);
    g.strokeWeight(sw);
    g.beginShape();
    let x = 0;
    let y = 0;
    let lastX = 200;
    let lastY = 200;
    for (let i = 0; i < steps; i++) {
      while (dist(x, y, lastX, lastY) > 50) {
        x = random(border, width - border);
        y = random(border, height - border);
      }
      console.log("  ", x, y);
      g.curveVertex(x, y);
      lastX = x;
      lastY = y;
      x = Number.MAX_SAFE_INTEGER;
      y = Number.MAX_SAFE_INTEGER;
    }
    g.endShape();
  }
  g.filter(DILATE);
  return g;
}
