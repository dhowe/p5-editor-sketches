class QuadTree {
  constructor(x, y, w, h) {
    this.bounds = { x, y, w, h };
    this.capacity = 4;
    this.points = [];
    this.divided = false;
  }
  
  update(pts) {
    if (this.divided) {
      this.divided = false;
      delete this.nw;
      delete this.ne;
      delete this.sw;
      delete this.se;
    }
    this.points = [];
    pts.forEach(p => this.insert(p));
  }

  size() {
    return (this.points.length + (this.divided ? 
      this.nw.size() + this.ne.size() + this.sw.size() + this.se.size(): 0));
  }

  draw() {
    let { x, y, w, h } = this.bounds;
   
    if (this.divided) {
      this.nw.draw();
      this.ne.draw();
      this.sw.draw();
      this.se.draw();
    }
    else {
      noFill();
      stroke(0);
      rect(x, y, w, h);
      this.points.forEach((pt) => circle(pt.x, pt.y, 3));
    }
  }

  subdivide() {
    let { x, y, w, h } = this.bounds;
    
    // divid into 4 new trees
    this.nw = new QuadTree(x, y, w / 2, h / 2);
    this.ne = new QuadTree(x + w / 2, y, w / 2, h / 2);
    this.sw = new QuadTree(x, y + h / 2, w / 2, h / 2);
    this.se = new QuadTree(x + w / 2, y + h / 2, w / 2, h / 2);
    this.divided = true;
    
    // move the points to the new trees
    this.points.forEach(p => this.toChildren(p));
    this.points = [];
  }

  insert(pt) {
    if (!this.contains(pt)) return false; // ignore

    if (!this.divided) {
      
      if (this.points.length < this.capacity) { // insert
        this.points.push(pt); 
        return true;
      }
      if (this.points.length === this.capacity) { // divide
        this.subdivide();  
      }
    }
    
    // we're already divided, give to children
    return this.toChildren(pt);
  }
  
  toChildren(pt) {
    // try to insert in each of quadrants, if so return true
    return (this.nw.insert(pt) || this.ne.insert(pt) ||
      this.sw.insert(pt) || this.se.insert(pt));
  }

  contains(pt) {
    // check if the point is inside this quad
    let { x, y, w, h } = this.bounds;
    return pt.x >= x && pt.x <= x + w && pt.y >= y && pt.y <= y + h;
  }
}