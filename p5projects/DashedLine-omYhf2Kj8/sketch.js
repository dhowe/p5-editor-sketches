function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  background(200);
  strokeWeight(2);
  fill(0);
  
  // create random endpoints and dash-length
  let p1 = { x: random(10, 100), y: random(10, 390) };
  let p2 = { x: random(300, 390), y: random(10, 390) };
  let dashLen = random(3, 6);
  
  // draw the dashed line
  dashedLine(p1, p2, dashLen);
}

function dashedLine(p1, p2, dashLength) {
  
  // draw the endpoints
  circle(p1.x, p1.y, 3);
  circle(p2.x, p2.y, 3);
  
   // get the points on the line
  let pts = pointsOnLine(p1, p2);
  
  // get the angle for the line
  let ang = atan2(p2.y - p1.y, p2.x - p1.x);

  // loop over each of the points
  for (let i = 0; i < pts.length; i++) {
    let start = pts[i];
    
    // get the dash based on the angle and length
    let end = {
      x: start.x + cos(ang) * dashLength,
      y: start.y + sin(ang) * dashLength,
    };
    
    // make sure we don't past the endpoint
    if (i === pts.length-1) end = p2;
    
    // draw the dash
    line(start.x, start.y, end.x, end.y);
  }
}

function pointsOnLine(p1, p2) {
  let pts = [p1]; // start with first

  // calculate the number of points
  let steps = dist(p1.x, p1.y, p2.x, p2.y) / 10;

  for (let i = 1; i < steps - 1; i++) {
    let t = map(i, 0, steps - 1, 0, 1);

    // use lerp to get the position of each point
    let x = lerp(p1.x, p2.x, t);
    let y = lerp(p1.y, p2.y, t);

    // add the pt to our list
    pts.push({ x, y });
  }

  return pts;
}

