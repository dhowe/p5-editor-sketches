let pts, showPoints = false, num = 40;

function setup() {
  createCanvas(400, 400);
  background(255);
  noFill();
  for (let i = 0; i < num; i++) {
    let sz = width/num;
    recursiveLine([10, sz/2 + i * sz], [390, sz/2 + i * sz], 8, 0.15, pts=[]);
    drawCurve(pts);
  }
}

function drawCurve(pts) {
  beginShape();
  curveVertex(pts[0][0], pts[0][1]);
  for (let i = 0; i < pts.length; i++) {
    curveVertex(pts[i][0], pts[i][1]);
    if (showPoints) ellipse(pts[i][0], pts[i][1], 4);
  }
  curveVertex(pts[pts.length - 1][0], pts[pts.length - 1][1]);
  endShape();
}

function drawLine(pts) {
  for (let i = 1; i < pts.length; i++) {
    line(pts[i - 1][0], pts[i - 1][1], pts[i][0], pts[i][1]);
  }
}

function recursiveLine(p1, p2, minD, waviness, pts) {
  if (!pts.length) pts.push(p1); 
  let dst = pdist(p1, p2);
  let wavy = map(waviness, 0, 1, 0, 0.2, true) ;
  if (dst > minD) {
    let mp = plerp(p1, p2, 0.5, wavy * dst);
    recursiveLine(p1, mp, minD, waviness, pts);
    recursiveLine(mp, p2, minD, waviness, pts);
  } else {
    pts.push(p2);
  }
}

function pdist(p1, p2) {
  return dist(p1[0], p1[1], p2[0], p2[1]);
}

function plerp(p1, p2, t, r = 0) {
  let mx = lerp(p1[0], p2[0], t) + random(-r, r);
  let my = lerp(p1[1], p2[1], t) + random(-r, r);
  return [mx, my];
}
