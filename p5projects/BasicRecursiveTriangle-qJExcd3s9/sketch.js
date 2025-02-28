let a,b,c, tri, rdepth = 5;

function setup() {
  createCanvas(1200, 800);
  background(220);
  noFill();
  
  a = {x: width/2, y: 0};
  b =  {x: 0, y: height};
  c =  {x: width, y: height};
  tri = new Triangle(a, b, c);

  background(220);
  subdivide(tri, rdepth);
  noLoop();
}

function subdivide(tri, depth) {
  
  if (--depth === 0) { // base case
    tri.draw();
    return;
  }
  
  // pick a random triangle point 
  let pt = random([tri.a, tri.b, tri.c]);
  
  // get endpoints for the line across from it
  if(pt === tri.a) {
    endPts = [tri.b, tri.c];
  }
  else if(pt === tri.b) {
    endPts = [tri.a, tri.c];
  }
  else {
    endPts = [tri.a, tri.b];
  }
  
  // find the midpoint of the line
  let mid = {
    x: lerp(endPts[0].x, endPts[1].x, 0.5),
    y: lerp(endPts[0].y, endPts[1].y, 0.5)
  };
  
  // split into 2 new triangles
  let tr1 = new Triangle(pt, endPts[0], mid);
  let tr2 = new Triangle(pt, endPts[1], mid);
  
  // and subdivide each triangle
  subdivide(tr1, depth);
  subdivide(tr2, depth);
}

// a simple triangle class with 3 objects to hold the points {x,y}
class Triangle { 
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  draw() {
    fill(random(100)+150, random(100)+100, random(255));
    triangle(this.a.x, this.a.y, this.b.x, this.b.y, this.c.x, this.c.y);
  }
}