let pointProb = 0.1, weight = 2, bounds, numPoints, maxPointDistance;
let buffer, canvas, seed;

function setup() {
  canvas = createCanvas(400, 400);
  noFill();
  bounds = [0, 0, 200, 200];
  iterations = 1;
  maxPointDistance = 100;
  seed = Date.now();
}

function draw() { 
  background(251, 246, 242);
  randomSeed(seed);
  numPoints = frameCount+4;
  let { xs, ys, dotIndices } = curvePoints(bounds, numPoints, maxPointDistance, pointProb);
  drawCurve(xs, ys, dotIndices, weight, pointProb);
  rect(...bounds);
  if (buffer) image(buffer,200,200)
}

function curvePoints(bounds, steps, maxPointDistance, pointProb) {
  let x = 0;
  let y = 0;
  let lastX = 200;
  let lastY = 200;
  let xs = [], ys = [], dotIndices = []; 
  for (let i = 0; i < steps; i++) {
    while (dist(x, y, lastX, lastY) > maxPointDistance) {
      x = random(bounds[0], bounds[0] + bounds[2]);
      y = random(bounds[1], bounds[0] + bounds[3]);
    }
    
    xs.push(x);
    ys.push(y);
    if (random() < pointProb && i > 0 && i < steps - 1) { // dot or not?
      dotIndices.push(i);
    }

    lastX = x;
    lastY = y;
    x = Number.MAX_SAFE_INTEGER;
    y = Number.MAX_SAFE_INTEGER;
  }
  let minX = min(xs);
  let minY = min(ys);
  let maxX = max(xs);
  let maxY = max(ys);
  // for (let i = 0; i < xs.length; i++) {
  //   xs[i] -= minX - bounds[0];
  //   ys[i] -= minY - bounds[1];
  // }
  let bbox = [minX, minY, maxX - minX, maxY - minY];
  return { xs, ys, dotIndices, bbox };
  // print(s+points+' pts)');
}

function mouseClicked() {
    buffer = createGraphics(width/2, height/2);
    buffer.copy(
      // source
      canvas,
      // source x, y, w, h
      0, 0, width/2, height/2,
      // destination x, y, w, h
      0, 0, buffer.width, buffer.height);
}

function drawCurve(xs, ys, dots, sw, pointProb, g=canvas) {
  // print("drawCurve", xs, ys, Array.isArray(dots));
  noFill();
  stroke(0);
  strokeWeight(sw);
  beginShape();
  for (let j = 0; j < xs.length; j++) {
    curveVertex(xs[j], ys[j]);
    if (dots.includes(j)) {
      circle(xs[j], ys[j], 5)
    }
  }
  endShape();
  filter(DILATE);
}
