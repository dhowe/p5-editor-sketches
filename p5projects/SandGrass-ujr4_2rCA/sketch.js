function setup() {
  createCanvas(windowHeight, windowHeight);
  background(100);
  let pts = initPoints();
  makeSand(pts);
  makeGrass(pts);
}

function makeSand(pts) {
  beginShape();
  pts.forEach(p => curveVertex(p.x, p.y));
  endShape();
}

function initPoints() {
  let pts = [{ x: 0, y: height * 0.9 }];
  for (let i = 0; i < 6; i++) {
    pts.push({ x: width * (i / 6), y: height * 0.9 + random(-20, 20) });
  }
  pts.push({ x: width, y: height * 0.9 });
  pts.push({ x: width, y: height });
  pts.push({ x: 0, y: height });
  pts.push({ x: 0, y: height });
  // for (p of pts) circle(p.x, p.y, 5);
  return pts;
}

function makeGrass(pts, depth=8) {
  for (let j = 0; j < depth; j++) {
    for (let i = 0; i < pts.length; i++) {
      p = pts[i];
      q = pts[constrain(i + 1, 0, pts.length - 1)];
      d = dist(p.x, p.y, q.x, q.y);
      for (let j = 0; j < d; j++) {
        x = lerp(p.x, q.x, j / d);
        y = lerp(p.y, q.y, j / d);
        ht =
          map(abs(randomGaussian()), 0, 2, 25, 250) *
          map(noise(x * 0.002), 0, 1, 0.25, 1);
        wd = (ht * (random() < 0.5 ? -1 : 1)) / random(3, 10);
        makeBlade(x, y + 10, ht / 2, random(50, 200) / 2, wd / 2);
      }
    }
  }
}

// adapted from https://openprocessing.org/sketch/1991212
function makeBlade(x, y, l, s, d) {
  r = map(abs(randomGaussian()), 0, 2, 0.1, 0.15);
  beginShape();
  vertex(x, y);
  bezierVertex(x, y - l * 0.75, x + d, y - l, x + d, y - l);
  bezierVertex(x + d * r, y - l * 0.75, x + d * r, y, x + d * r, y);
  vertex(x, y);
  endShape();
}
