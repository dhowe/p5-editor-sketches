let p1 = { x: 50, y: 20 };
let p2 = { x: 380, y: 370 };

function setup() {
  createCanvas(400, 400);
  background(200);
  strokeWeight(2);
  noFill();
  
  // get the points on our line
  let pts = pointsOnLine(p1, p2, 3);
  
  drawAsCurve(pts);
  //drawAsLine(pts);
  //drawAsPoints(pts);
  
  // draw endpoints
  circle(p1.x, p1.y, 5);
  circle(p2.x, p2.y, 5);
}

function pointsOnLine(p1, p2, wiggle) {
  let pts = [p1]; // start with first point
  
  // calculate the number of steps
  let steps = dist(p1.x, p1.y, p2.x, p2.y) / 10;

  for (let i = 1; i < steps-1; i++) {
    
    let t = map(i, 0, steps - 1, 0, 1);
    
    // use lerp to get the position of each point
    let x = lerp(p1.x, p2.x, t);
    let y = lerp(p1.y, p2.y, t);
    
    // add a bit of randomness
    x += random(-wiggle, wiggle);
    y += random(-wiggle, wiggle);
    
    // no wiggle for last point
    if (i >= steps - 2) {
      x = p2.x;
      y = p2.y;
    }
    
    // add the pt to our list
    pts.push({x, y});
  }
  
  return pts;
}

function drawAsCurve(pts) {
  beginShape();
  
  // repeat first point
  curveVertex(pts[0].x, pts[0].y); 
  for (let i = 0; i < pts.length; i++) {
    curveVertex(pts[i].x, pts[i].y);
  }
  // repeat last point
  curveVertex(pts[pts.length - 1].x, pts[pts.length - 1].y);
  
  endShape();
}

function drawAsPoints(pts, sz=3) {
  pts.forEach(pt => circle(pt.x, pt.y, sz));
}

function drawAsLine(pts) {
  let lx = pts[0].x, ly = pts[0].y;
  for (let i = 1; i < pts.length; i++) {
    line(lx, ly, pts[i].x, pts[i].y);
    lx = pts[i].x;
    ly = pts[i].y;
  }
}









