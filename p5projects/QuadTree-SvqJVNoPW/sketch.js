class QuadTree {

  constructor(bounds, capacity = 4) { // {x,y,w,h}
    this.bounds = bounds;
    this.capacity = capacity;
    this.subtrees = 0;
    this.points = [];
  }

  clear() {
    this.points = [];
    if (this.subtrees) {
      this.subtrees.forEach(t => t.clear());
    }
    this.subtrees = 0;
  }

  size() {
    return this.subtrees
      ? this.subtrees.reduce((acc, t) => acc += t.size(), 0)
      : this.points.length;
  }

  contains(p) {
    return p.x >= this.bounds.x && p.x <= this.bounds.x + this.bounds.w
      && p.y >= this.bounds.y && p.y <= this.bounds.y + this.bounds.h;
  }

  insert(obj) { // x,y
    if (!obj || !this.contains(obj)) return false;

    if (this.subtrees) {
      this.subtrees.forEach(st => st.insert(obj));
      return true;
    }

    this.points.push(obj);

    // if we're over capacity, subdivide
    if (this.points.length > this.capacity) {
      this.subdivide();

      // now insert our points into the subtrees
      while (this.points.length) {
        let pt = this.points.pop();
        for (let i = 0; i < this.subtrees.length; i++) {
          //console.log('sub'+i,this.subtrees[i].insert(pt));
          this.subtrees[i].insert(pt)
        }
      }
      this.points = undefined; // cleanup (no pts in subdivided node)
    }
    return true;
  }

  subdivide() {
    let b = this.bounds;

    // divide into 4 subtrees
    this.subtrees = [

      // clockwise, from upper-right
      new QuadTree({
        // UR
        x: b.x + b.w / 2,
        y: b.y,
        w: b.w / 2,
        h: b.h / 2,
      }),
      new QuadTree({
        // LR
        x: b.x + b.w / 2,
        y: b.y + b.h / 2,
        w: b.w / 2,
        h: b.h / 2,
      }),
      new QuadTree({
        // LL
        x: b.x,
        y: b.y + b.h / 2,
        w: b.w / 2,
        h: b.h / 2,
      }),
      new QuadTree({
        // UL
        x: b.x,
        y: b.y,
        w: b.w / 2,
        h: b.h / 2,
      }),
    ];
  }

  intersects(rect) {

    // no horizontal overlap
    if (rect.x >= this.bounds.x + this.bounds.w
      || this.bounds.x >= rect.x + rect.w) {
      return false;
    }
    // no vertical overlap
    if (rect.y >= this.bounds.y + this.bounds.h
      || this.bounds.y >= rect.y + rect.h) {
      return false;
    }

    return true;
  }

  query(bounds) { // {x,y,w,h})

    let result = [];

    if (this.intersects(bounds)) {
      //console.log('hit', " query=", bounds,'this=',this.bounds,'pts:',this.size());
      if (this.subtrees) {
        for (let i = 0; i < this.subtrees.length; i++) {
          let res = this.subtrees[i].query(bounds);
          if (res && res.length) result.push(...res);
        }
      }
      else {
        result.push(...this.points.filter(p => this.contains(p)));
      }
    }

    return result;
  }

  draw() {
    if (!this.subtrees) {
      let b = this.bounds;
      if (b.w >= 2 && b.h >= 2) {
        strokeWeight(1);
        rect(b.x, b.y, b.w, b.h);
      }
      this.points.forEach((p) => {
        strokeWeight(0.1);
        //point(p.x, p.y);
      });
    } else {
      this.subtrees.forEach((st) => st.draw());
    }
  }
}

function biasedRandom(min, max, bias) {
  let mix = random();
  let t = random(min, max);
  return t * (1 - mix) + (bias * mix);
}

//////////////////////////////////////////////////////////////////////

let tree, animate = true;

function setup() {
  createCanvas(400, 400);
  background(255);
  tree = new QuadTree({ x: 5, y: 5, w: width - 10, h: height - 10 });
  if (!animate) {
    for (let i = 0; i < 3000; i++) {
      tree.insert({
        x: biasedRandom(0, width, width / 4),
        y: biasedRandom(0, height, height / 4),
      });
    }
    tree.draw();
  }
}

function draw() {
  if (animate) {
    background(255);
    noFill();
    stroke(0);
    if (frameCount > 1000) noLoop();
    let x = noise(frameCount / 100) * width;
    let y = noise(5 + frameCount / 100) * height;
    tree.insert({x,y});
    tree.draw();
    fill(0);
    circle(x,y,6);
  }
}


