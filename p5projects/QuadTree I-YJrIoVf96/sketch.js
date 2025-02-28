let tree;

function setup() {
  createCanvas(800, 800);
  tree = new QuadTree(0, 0, width, height);
}

function draw() {
  background(220);
  tree.render();
  text(tree.size(), 10, 10);

  if (mouseIsPressed) {
    tree.insert({ x: mouseX, y: mouseY });
  }
}

function mouseClicked() {
  //tree.insert({ x: mouseX, y: mouseY });
}

class QuadTree {
  constructor(x, y, w, h) {
    this.boundary = { x, y, w, h };
    this.capacity = 4;
    this.points = [];
    this.divided = false;
  }

  size() {
    return (this.points.length + (this.divided ? 
      this.nw.size() + this.ne.size() + this.sw.size() + this.se.size(): 0));
  }

  render() {
    let { x, y, w, h } = this.boundary;
    noFill();
    stroke(0);
    rect(x, y, w, h);
    
    this.points.forEach((pt) => circle(pt.x, pt.y, 5));
    
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

    if (this.points.length < this.capacity && !this.divided) {
      this.points.push(pt);
      return true;
    }

    if (!this.divided && this.points.length === this.capacity) {
      this.subdivide();
    }
    
    if (this.divided) {
      return (
        this.nw.insert(pt) ||
        this.ne.insert(pt) ||
        this.sw.insert(pt) ||
        this.se.insert(pt)
      );
    }

    return true;
  }

  contains(pt) {
    let { x, y, w, h } = this.boundary;
    return pt.x >= x && pt.x <= x + w && pt.y >= y && pt.y <= y + h;
  }
}
