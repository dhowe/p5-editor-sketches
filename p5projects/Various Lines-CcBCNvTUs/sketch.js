

function setup() { // p5 example
  createCanvas(600, 600);
  background(245);

  let a = { x: 20, y: 190 };
  let b = { x: 480, y: 120 };

  line(a.x, a.y, b.x, b.y);
  translate(10, 30);
  
  lerpPointLine(a, b, 100);
  translate(10, 30);

  roughLine(a, b);
  translate(10, 30);

  roughLine(a, b, 0.7);
  translate(10, 30);
  
  roughLine(a, b, 0.9);
  translate(10, 40);

  roughLine(a, b, 0.5, 0.9, 2.5);
  translate(10, 30);
  
  roughLine(a, b, 0.7, 0.9, 2.5);
  translate(10, 30);
  
  roughLine(a, b, 0.9, 0.9, 2.5);
  translate(10, 30);
}

function roughLine(a, b, roughness=0.5, minSw=1, maxSw=1) {
  
  if (dist(a.x, a.y, b.x, b.y) < maxSw*1.5) {
    let func = minSw===1 && maxSw===1 ? point : circle;
    func(a.x, a.y, random(minSw, maxSw));
    return;
  }
  
  // slope of line
  let dx = (b.x - a.x);
  let dy = (b.y - a.y);
  
  // midpoint of line
  let mid = { x: lerp(a.x, b.x, 0.5), y: lerp(a.y, b.y, 0.5) };

  // scale the perpendicular through midpt, based on roughness
  let perplen = roughness ? map(roughness, 0, 1, 100, 7, true) : Number.MAX_SAFE_INTEGER;
  dx /= perplen;
  dy /= perplen;
  
  // end-pts of perpendicular
  let c = { x: mid.x + dy, y: mid.y - dx };
  let d = { x: mid.x - dy, y: mid.y + dx };

  // choose next somewhere on perpendicular
  let amt = random();
  let next = { x: lerp(c.x, d.x, amt), y: lerp(c.y, d.y, amt) };

  // recurse
  roughLine(a, next, roughness, minSw, maxSw);
  roughLine(next, b, roughness, minSw, maxSw);
}

function recursivePointLine(p1, p2) {
  if (dist(p1.x, p1.y, p2.x, p2.y) < 1) {
    point(p1.x, p1.y);
    return;
  }
  let x = lerp(p1.x, p2.x, 0.5);
  let y = lerp(p1.y, p2.y, 0.5);
  rline(p1, { x, y });
  rline({ x, y }, p2);
}

function lerpPointLine(p1, p2, steps) {
  for (let i = 0; i <= steps; i++) {
    let x = lerp(p1.x, p2.x, i / steps);
    let y = lerp(p1.y, p2.y, i / steps);
    circle(x, y, random(0.5, 2.5));
  }
}
