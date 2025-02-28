let a, b, c, tri, tri2, rdepth = 12;

function setup() {
  createCanvas(800, 600);
  background(220);
  noFill();
  
  // lower left half
  a = {x: 0, y: 0};
  b =  {x: 0, y: height};
  c =  {x: width, y: height};
  tri = new Triangle(a, b, c);
  
  // upper right half
  a = {x: 0, y: 0};
  b =  {x: width, y: 0};
  c =  {x: width, y: height};
  tri2 = new Triangle(a, b, c);

  background(220);
  subdivide(tri, rdepth);
  subdivide(tri2, rdepth);
  noLoop();
}

function subdivide(tri, depth) {
  
  // occasionally end recursion early for some big ones
  if (depth <= 1 || (depth < rdepth-2 && random()<0.15)) {
    tri.draw(); // base case
    return;
  }
  
  // always use the longest side
  let ab = dist(tri.a.x, tri.a.y, tri.b.x, tri.b.y);
  let bc = dist(tri.b.x, tri.b.y, tri.c.x, tri.c.y);
  let ca = dist(tri.c.x, tri.c.y, tri.a.x, tri.a.y);
  let hypot = max(ab, bc, ca);
  
  // and the pt across from it
  let ends, pt;
  if (hypot === ab) {
    pt = tri.c;
    ends = [tri.a, tri.b];
  }
  else if (hypot === bc) {
    pt = tri.a;
    ends = [tri.b, tri.c];
  }
  else {
    pt = tri.b;
    ends = [tri.c, tri.a];
  }
  
  // a random point near the center of the line
  let t = random(0.3, 0.7);
  let mid = {
    x: lerp(ends[0].x, ends[1].x, t),
    y: lerp(ends[0].y, ends[1].y, t)
  }
  
  // split into 2 new triangles
  let tr1 = new Triangle(pt, ends[0], mid);
  let tr2 = new Triangle(pt, ends[1], mid);

  // and subdivide each triangle
  subdivide(tr1, depth-1);
  subdivide(tr2, depth-1);
}

// a simple triangle class with 3 objects to hold the points {x,y}
class Triangle { 
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  draw() {
    stroke(0,30)
    fill(random(100)+100, random(100)+100, random(155)+100);
    triangle(this.a.x, this.a.y, this.b.x, this.b.y, this.c.x, this.c.y);
  }
}