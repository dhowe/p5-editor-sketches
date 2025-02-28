
let recursionDepth = 6;

function setup() {
  createCanvas(800, 400);
  background(200);  
  splitQuad({ x: 5, y: 5, w: width-10, h: height-10 }, recursionDepth);
}

function splitQuad(theQuad, depth) {
  
  let { x, y, w, h } = theQuad;

  // stop randomly occasionally (to get larger rects)
  if (--depth < 0 || (depth < recursionDepth-1 && random() > 0.75)) {
    fill(random(100)+150, random(100)+100, random(255));
    rect(x, y, w, h);
  }
  else {

    // pick two random split points
    let nx = x + w * random(0.3, 0.7)
    let nx2 = x + w * random(0.3, 0.7)
    let ny = y + h * random(0.3, 0.7);
    let ny2 = y + h * random(0.3, 0.7);

    let q1, q2, q3, q4;
    
    if (random() < 0.5) {
      // vertical: use nx and ny or ny2
      q1 = { x, y, w: nx - x, h: ny - y };
      q2 = { x: nx, y, w: x + w - nx, h: ny2 - y };
      q3 = { x, y: ny, w: nx - x, h: y + h - ny };
      q4 = { x: nx, y: ny2, w: x + w - nx, h: y + h - ny2 };
    }
    else {
      // horizontal: using ny and nx or nx2
      q1 = { x, y, w: nx - x, h: ny - y };
      q2 = { x: q1.x + q1.w, y, w: w - q1.w, h: q1.h };
      q3 = { x, y: y + q1.h, w: nx2 - x, h: h - q1.h };
      q4 = { x: q3.x + q3.w, y: q3.y, w: w - q3.w, h: q3.h };
    }

    // recurse
    splitQuad(q1, depth);
    splitQuad(q2, depth);
    splitQuad(q3, depth);
    splitQuad(q4, depth);
  }
}
