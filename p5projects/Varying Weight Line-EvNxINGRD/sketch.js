function setup() {
  createCanvas(400, 400);
  background(255);
  fill(0);
  let p1 = { x: 10, y: 200 }, p2 = { x: 380, y: 200 };
  
  // pass our function as the 3rd argument
  varyingWeightLine(p1, p2, getStrokeWeight);
}

// determines strokeWeight, given progress % from p1 to p2
function getStrokeWeight(progress) {
  return progress > 0.5 ?
    map(progress, 0.5, 1, 8, 1) :
    map(progress, 0, 0.5, 1, 8);
}

function varyingWeightLine(p1, p2, strokeWeightFunc) {
  
  let length = dist(p1.x, p1.y, p2.x, p2.y);
  let ang, p = p1, d = length;
  
  for (let i = 0; d > 1; i++) {
    
    // get the percent left to travel 
    let progress = map(d, 0, length, 1, 0);
    
    // use the function passed in
    let sw = strokeWeightFunc(progress);
    circle(p.x, p.y, sw);
    
    // get remaining distance and angle
    d = dist(p.x, p.y, p2.x, p2.y);
    ang = atan2(p2.y - p.y, p2.x - p.x);
    
    // get next point on the path
    p = nextPoint(p, ang, sw / 2);
    
    // add a bit of wiggle
    p.x += random(-sw / 8, sw / 8);
    p.y += random(-sw / 8, sw / 8);
    
    if (d > length) break; // just in case
  }
}

function nextPoint(start, angle, distance) {
  return {
    x: start.x + cos(angle) * distance,
    y: start.y + sin(angle) * distance,
  }
}
