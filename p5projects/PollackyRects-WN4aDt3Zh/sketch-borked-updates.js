let border = 75;

function setup() {
  createCanvas(400, 400);
  // } function draw() {
  background(251, 246, 242);
  let bounds = glyph({
    bounds: [0, 0, 200, 200],
    iterations: floor(random(10, 15)),
    maxPointDistance: 100,
    pointProb: 0.2,
  });
  strokeWeight(.5);
  console.log('bounds');
  rect(...bounds);
}

function glyph(opts = {}) {
  let { bounds, maxPointDistance, pointProb, iterations } = opts;
  let seed = Date.now();
  let sw = random(1.9, 2.5);
  let bboxes = [];
  for (let i = 0; i < iterations; i++) {
    randomSeed(seed);
    let { xs, ys, bbox } = curvePoints(
      bounds,
      i + 4,
      maxPointDistance,
      pointProb
    );
    bboxes.push(bbox);
    //print(i, bbox);
    drawCurve(xs, ys, sw, pointProb);
    
    strokeWeight(0.5);
    rect(...bbox);
  }
  
  let minX = min(bboxes.map(bb => bb[0]));
  let minY = min(bboxes.map(bb => bb[1]));
  
  let maxX = max(bboxes.map(bb => bb[0]+bb[2]));
  let maxY = max(bboxes.map(bb => bb[1]+bb[3]));
  
  return [minX,minY,maxX-minX,maxY-minY];
}

function curvePoints(bounds, steps, maxPointDistance, pointProb) {
  let x = 0;
  let y = 0;
  let lastX = 200;
  let lastY = 200;
  let s = "curvedLine(";
  let xs = [],
    ys = [];
  for (let i = 0; i < steps; i++) {
    while (dist(x, y, lastX, lastY) > maxPointDistance) {
      x = random(bounds[0], bounds[0] + bounds[2]);
      y = random(bounds[1], bounds[0] + bounds[3]);
    }
    // s+= `[${round(x)},${round(y)}], `;
    // curveVertex(x, y);
    xs.push(x);
    ys.push(y);
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
  return { xs, ys, bbox };
  // print(s+points+' pts)');
}

function drawCurve(xs, ys, sw, pointProb) {
  print("drawCurve", xs.length, sw, pointProb);
  noFill();
  stroke(0);
  strokeWeight(.5);
  beginShape();
  for (let j = 0; j < xs.length; j++) {
    curveVertex(xs[j], ys[j]);
    if (random() < pointProb && j > 0 && j < xs.length - 1) {
      circle(xs[j], ys[j], 3);
    }
  }
  endShape();
  filter(DILATE);
}
