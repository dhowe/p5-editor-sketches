
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  background(200);
  strokeWeight(2);
  fill(0);
  
  // create random endpoints
  let p1 = { x: random(10, 100), y: random(10, 390) };
  let p2 = { x: random(300, 390), y: random(10, 390) };

  // parameters for function
  let stepSize = dist(p1.x, p1.y, p2.x, p2.y) / 50;
  let strokeW = stepSize / 2;
  let wiggle = 3;
  
  // draw the line with connected dots
  lineFromDots(p1, p2, stepSize, strokeW, wiggle);
  
  stroke('red');
  noFill();
  strokeWeight(1);
  circle(p1.x, p1.y, strokeW);
  circle(p2.x, p2.y, strokeW);
}

function lineFromDots(p1, p2, stepSize, sw, wiggle) {
  
   // get the points on the line
  let pts = pointsOnLine(p1, p2, stepSize, wiggle);
  
  strokeWeight(sw);
  
  // loop over each of the points
  for (let i = 1; i < pts.length; i++) {

    // draw the dot
    line(pts[i].x, pts[i].y, pts[i-1].x, pts[i-1].y);
  }
}

function pointsOnLine(p1, p2, stepSize, wiggle) {
  let pts = [p1]; // start with first
  
  let lx = p1.x;
  let ly = p1.y;
  let d = dist(p1.x, p1.y, p2.x, p2.y);
  let ang = atan2(p2.y-ly,p2.x-lx);
  for (let i = 0; i < 1000 ; i++) {
    
    ang = atan2(p2.y-ly,p2.x-lx);

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

