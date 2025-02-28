// TODO: 
// base color on area + map to larger gradient
// use noise or biased random for t
// make each tris randomly smaller than original size
// use area for mapping strokeWeight


function setup() {
  createCanvas(1200, 1000);
  background(255);
  noFill();
  stroke(0, 32);
  tri([0, 0], [width, 0], [width, height], 14);
  tri([0, 0], [0, height], [width, height], 15);
}

function tri(a, b, c, depth) {
  if (depth <= 0) return;

  let lines = [ [a, b], [b, c], [c, a] ];

  let hyp = lines[0], longest = 0;
  
  // find hypotenuse
  for (let i = 0; i < lines.length; i++) {
    let lineLen = _dist(...lines[i]);
    //_line(...lines[i]);
    if (lineLen > longest) {
      hyp = lines[i];
      longest = lineLen;
    }
  }

  noStroke();
  fill(longest*2);
  _triangle(a,b,c);

  let pts = [a, b, c]; // point across from hypotenuse
  for (let i = pts.length - 1; i >= 0; i--) {
    if (eq(pts[i], hyp[0]) || eq(pts[i], hyp[1])) {
      pts.splice(i, 1);
    }
  }

  let midpt = pointOnLine(hyp[0], hyp[1], random(.2,.8));
  random() < .9 && tri(midpt, pts[0], hyp[0], depth - 1);
  random() < .9 && tri(midpt, pts[0], hyp[1], depth - 1);
}

function _area(a,b,c) {
  let d = [[a, b], [b, c], [c, a]].map(l => _dist(...l));
  let p = (d[0] + d[1] + d[2]) / 2;
  return sqrt(p * (p - d[0]) * (p - d[1]) * (p - d[2]));
}

function pointOnLine(a, b, t) {
  return [a[0] * (1.0 - t) + b[0] * t, a[1] * (1.0 - t) + b[1] * t];
}

function _triangle(p1, p2, p3) {
  triangle(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
}

function _trilines(p1, p2, p3) {
  line(p1[0], p1[1], p2[0], p2[1]);
  line(p2[0], p2[1], p3[0], p3[1]);
  line(p3[0], p3[1], p1[0], p1[1]);
}

function _line(p1, p2) {
  line(p1[0], p1[1], p2[0], p2[1]);
}

function _dist(p1, p2) {
  return dist(p1[0], p1[1], p2[0], p2[1]);
}

function eq(p1, p2) {
  return p1[0] === p2[0] && p1[1] === p2[1];
}
