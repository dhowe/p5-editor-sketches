function setup() {
  createCanvas(400, 400);
  background(255);
  //let a = createVector(random(width), random(height));
  //let b = createVector(random(width), random(height));
  let a = createVector(5, 200);
  let b = createVector(395, 180);
  splitLine(b, a, 1);
  b.y += 10;
  a.y += 10;
  splitLine(b, a, 2);
  b.y += 10;
  a.y += 10;
  splitLine(b, a, 3);
  text('a', 5, 200-10+50);
  text('b', 390, 180-7+50);
}

function splitLine(a, b,n) {
  if (p5.Vector.dist(a, b) < (n===2?4:1)) {
    if (n === 3)
      stroke(0, random(50, 100));
    point(a.x, a.y);
  } else {
    let nx = lerp(a.x, b.x, 0.5);
    let ny = lerp(a.y, b.y, 0.5);
    let off =  (n === 3) ?random(-0.3, 0.3) : 0;
    let c = createVector(nx + off, ny + off);
    splitLine(a, c, n);
    splitLine(c, b, n);
  }
}
