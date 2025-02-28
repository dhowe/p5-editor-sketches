
let recursionDepth = 5;

function setup() {
  createCanvas(800, 600);
  background(200);  
  let qd = { x: 5, y: 5, w: width - 10, h: height - 10 };
  splitQuad(qd, recursionDepth);
}

function splitQuad(theQuad, depth) {
  
  let { x, y, w, h } = theQuad;

  if (--depth < 0) {
    
    // if we reached max-depth, just draw  
    fill(random(100)+150, random(100)+100, random(255));
    rect(x, y, w, h);
  }
  else {

    // pick a random split point
    let nx = x + w * random(0.2, 0.8)
    let ny = y + h * random(0.2, 0.8);

    // divide into 4 quadrants
    let nw = { x, y, w: nx - x, h: ny - y };
    let ne = { x: nx, y, w: x + w - nx, h: ny - y };
    let sw = { x, y: ny, w: nx - x, h: y + h - ny };
    let se = { x: nx, y: ny, w: x + w - nx, h: y + h - ny };

    // recurse on each
    splitQuad(nw, depth);
    splitQuad(ne, depth);
    splitQuad(sw, depth);
    splitQuad(se, depth);
  }
}
