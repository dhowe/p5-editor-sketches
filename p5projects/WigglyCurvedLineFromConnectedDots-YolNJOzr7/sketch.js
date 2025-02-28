function setup() {
  createCanvas(400, 400);
  background(200);
  strokeWeight(2);
  noFill();

  let a = { x: 10, y: 15 };
  let b = { x: 380, y: 380 };

  // draw lines to connect points
  curveFromDots(a, b, 5, 2, 2);

  // endpoints
  stroke("red");
  circle(a.x, a.y, 5);
  circle(b.x, b.y, 5);
}

function curveFromDots(p1, p2, stepSize, weight, wiggle) {
  
  strokeWeight(weight);

  // get the points on the line
  let pts = pointsOnLine(p1, p2, stepSize, wiggle);

  beginShape();
  curveVertex(pts[0].x, pts[0].y);
  for (let i = 0; i < pts.length; i++) {
    curveVertex(pts[i].x, pts[i].y);
  }
  curveVertex(pts[pts.length - 1].x, pts[pts.length - 1].y);
  endShape();
}

function pointsOnLine(p1, p2, stepSize, wiggle) {
  let pts = [p1]; // start with first

  let lx = p1.x;
  let ly = p1.y;
  let d = dist(p1.x, p1.y, p2.x, p2.y);
  let ang = atan2(p2.y - ly, p2.x - lx);
  for (let i = 0; i < 1000; i++) {
    ang = atan2(p2.y - ly, p2.x - lx);

    x = lx + cos(ang) * stepSize;
    y = ly + sin(ang) * stepSize;

    // add some wiggle
    x += random(-wiggle, wiggle);
    y += random(-wiggle, wiggle);

    // add the pt to our list
    pts.push({ x, y });

    d = dist(lx, ly, p2.x, p2.y);
    if (d < stepSize * 4) break;

    lx = x;
    ly = y;
  }

  pts.push(p2);

  return pts;
}
