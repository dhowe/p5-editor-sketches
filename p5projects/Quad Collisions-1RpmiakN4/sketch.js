let particles = [], fr = 0, debug = 0, step = 3;

function setup() {
  createCanvas(600, 400);
  tree = new QuadTree(0, 0, width, height);
  for (let i = 0; i < 1000; i++) {
    particles.push({
      x: random(width/3),
      y: random(height/3),
      colliding: false,
      radius: 4,
    });
  }
}

function draw() {
  background(0);
  noStroke();

  tree.reset();
  
  for (let p of particles) {
    tree.insert(p); 
    
    fill(p.colliding ? 255:100);
    //circle(p.x, p.y, p.radius * 2);
    
    p.x += random(-step, step);
    p.y += random(-step, step);
    p.colliding = false;
  }

  tree.render();

  for (let p of particles) {
    p.colliding = false;
    let pts = tree.query({x: p.x, y: p.y, radius: p.radius * 2});
    p.colliding = pts.some(q => circlesIntersect(p, q));
  }
  
  fill(255);
  if (debug) doMouseRange();
  //text(fr=round(lerp(fr, frameRate(), 0.1)),20,40);
}

class QuadTree {
  
  constructor(x, y, w, h) {
    this.boundary = { x, y, w, h };
    this.capacity = 4;
    this.reset();
  }
  
  reset() {
    this.points = [];
    this.divided = false;
    this.nw = this.ne = this.sw = this.se = null;
  }

  query(circleBounds, found = []) {
    
    if (!circleIntersectsRect(circleBounds, this.boundary)) {
      return found;
    }

    for (let p of this.points) {
      if (circleContains(circleBounds, p)) found.push(p);
    }
    
    if (this.divided) {
      this.nw.query(circleBounds, found);
      this.ne.query(circleBounds, found);
      this.sw.query(circleBounds, found);
      this.se.query(circleBounds, found);
    }

    return found;
  }
  
  render() {
    let { x, y, w, h } = this.boundary;
    noFill();
    stroke(255);
    strokeWeight(0.1);
    rect(x, y, w, h);
    //this.points.forEach((pt) => circle(pt.x, pt.y, pt.radius * 2));
    if (this.divided) {
      this.nw.render();
      this.ne.render();
      this.sw.render();
      this.se.render();
    }
  }

  subdivide() {
    let { x, y, w, h } = this.boundary;
    this.nw = new QuadTree(x, y, w / 2, h / 2);
    this.ne = new QuadTree(x + w / 2, y, w / 2, h / 2);
    this.sw = new QuadTree(x, y + h / 2, w / 2, h / 2);
    this.se = new QuadTree(x + w / 2, y + h / 2, w / 2, h / 2);
    this.divided = true;
  }

  insert(pt) {
    if (!this.contains(pt)) return false;

    if (this.points.length < this.capacity) {
      this.points.push(pt);
      return true;
    }

    if (!this.divided && this.points.length === this.capacity) {
      this.subdivide();
    }

    return this.divided ? 
        this.nw.insert(pt) ||
        this.ne.insert(pt) ||
        this.sw.insert(pt) ||
        this.se.insert(pt) : true;
  }

  contains(pt) {
    let { x, y, w, h } = this.boundary;
    return pt.x >= x && pt.x <= x + w &&
      pt.y >= y && pt.y <= y + h;
  }
}

function circlesIntersect(a, b) {
  return a !== b && dist(a.x, a.y, b.x, b.y) < (a.radius + b.radius);
}

function circleContains(circ, pt) {
  return dist(circ.x, circ.y, pt.x, pt.y) < circ.radius;
}

function circleIntersectsRect(circ, rec) {

  let xDist = Math.abs(rec.x - circ.x);
  let yDist = Math.abs(rec.y - circ.y);

  // radius of the circle
  let r = circ.radius, w = rec.w, h = rec.h;

  let edges = Math.pow((xDist - w), 2) + Math.pow((yDist - h), 2);

  // no intersection
  if (xDist > (r + w) || yDist > (r + h)) return false;

  // intersection within the circle
  if (xDist <= w || yDist <= h) return true;

  // intersection on the edge of the circle
  return edges <= r ** 2;
}

function testMouseRange() {
  let cbounds = {x: mouseX, y: mouseY, radius: 50};
  tree.query(cbounds).forEach(p => p.colliding=true);
  noFill(); stroke('red');
  circle(cbounds.x,cbounds.y,cbounds.radius*2);
  noStroke();
}
