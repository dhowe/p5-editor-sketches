let sd = .01;
let m, n;

function setup() {
  createCanvas(400, 400);
  background(255);
  m = createVector(0, 300);
  n = createVector(400, 200);
  line(0, 300,400, 200);
  myline(m, n);
}

function myline(a, b) {
  if (p5.Vector.dist(a, b) > 1) {
  
    let nx = lerp(a.x, b.x, .5);
    let ny = lerp(a.y, b.y, .5);
    let c = createVector(nx, ny);
    //ellipse(a.x, a.y, 10);
    ellipse(c.x, c.y, 10);
    // myline(a, c);
    // myline(b, c);
  } else {
    let d = dist(a.x, a.y, m.x, m.y);
    stroke(d);
    point(a.x, a.y);
  }
}
