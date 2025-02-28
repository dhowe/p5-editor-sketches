let numDots = 50;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  background(200);
  strokeWeight(2);
  fill(0);
  
  // create random endpoints and dash-length
  let p1 = { x: random(10, 100), y: random(10, 390) };
  let p2 = { x: random(300, 390), y: random(10, 390) };

  let d = dist(p1.x, p1.y, p2.x, p2.y);
  let dotSz = d / (numDots * 2);
  
  // draw the line with dots
  lineFromDots(p1, p2, numDots, dotSz);
  
    
  stroke('red');
  noFill();
  circle(p1.x, p1.y, 5);
  circle(p2.x, p2.y, 5);
}

function lineFromDots(p1, p2, num, sz) {
  
   // get the points on the line
  let pts = pointsOnLine(p1, p2, num);

  // loop over each of the points
  for (let i = 0; i < pts.length; i++) {

    // draw the dot
    circle(pts[i].x, pts[i].y, sz);
  }
}

function pointsOnLine(p1, p2, steps) {
  let pts = [p1]; // start with first
  
  for (let i = 1; i < steps ; i++) {
    
    // get percent of the way to end
    let t = map(i, 0, steps - 1, 0, 1);

    // use lerp to get the position of each point
    let x = lerp(p1.x, p2.x, t);
    let y = lerp(p1.y, p2.y, t);

    // add the pt to our list
    pts.push({ x, y });
  }
  
  return pts;
}

