class Pt {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  dist(p) {
    return dist(this.x, this.y, p.x, p.y);
  }
  lerp(p, t, r = 0) {
    let mx = lerp(this.x, p.x, t) + random(-r, r);
    let my = lerp(this.y, p.y, t) + random(-r, r);
    return new Pt(mx, my);
  }
}
let pts;
function setup() {
  createCanvas(400, 400);
  background(255);
  dline(new Pt(10, 20), new Pt(390, 20), 10, (pts = []));
  noFill() && drawCurve(pts);
}

function drawCurve(pts) {
  beginShape();
  curveVertex(pts[0].x, pts[0].y);
  for (let i = 0; i < pts.length; i++) {
    curveVertex(pts[i].x, pts[i].y);
    ellipse(pts[i].x, pts[i].y,4)
  }
  curveVertex(pts[pts.length-1].x, pts[pts.length-1].y);
  
  endShape();  
}

function drawLine(pts) {
  for (let i = 1; i < pts.length; i++) {
    line(pts[i-1].x, pts[i-1].y, pts[i].x, pts[i].y);
  }
}

function dline(p1, p2, minD, pts) {
  if (!pts.length) pts.push(p1);
  let dst = p1.dist(p2);
  if (dst > minD) {
    let mp = p1.lerp(p2, 0.5, dst / 20);
    dline(p1, mp, minD, pts);
    dline(mp, p2, minD, pts);
  } else {
    pts.push(p2);
  }
}
