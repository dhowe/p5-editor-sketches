let lines = 0;
function setup() {
  createCanvas(800, 800);
  background(255);
  strokeWeight(0.2);
  
  splitTri(new Tri( // left
    createVector(0, 0), 
    createVector(0, height), 
    createVector(width, 0)));
  
  splitTri(new Tri( // right
    createVector(width, height),
    createVector(0, height),
    createVector(width, 0)));
  
  console.log(lines);
}

function splitTri(t) {
  let [p1, p2] = t.hypot();
  let mp = pointOnLine(p1, p2, random(.4,.6));
  let d = t.nonHypPt();

  let split = false, t1, t2;
  if (p5.Vector.dist(p1, p2) > 40) {
    t1 = new Tri(mp, d, p1);
    t2 = new Tri(mp, d, p2);
    //if (random() < 0.95) {
      split = true;
    //}
  }

  line(d.x,d.y,mp.x,mp.y);
  if (split) {
    if (random() < .97) splitTri(t1);
    splitTri(t2);
  }
}

////////////////////////////////

class Tri {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  // render() {
  //   triangle(this.a.x, this.a.y, this.b.x, this.b.y, this.c.x, this.c.y);
  // }
  lines() {
    return [
      [this.a, this.b],
      [this.b, this.c],
      [this.c, this.a],
    ];
  }
  nonHypPt() {
    let [h1, h2] = this.hypot();
    let pts = [this.a, this.b, this.c];
    for (let i = pts.length - 1; i >= 0; i--) {
      if (pts[i].equals(h1) || pts[i].equals(h2)) {
        pts.splice(i, 1);
      }
    }
    return pts[0];
  }
  hypot() {
    let hyp,
      longest = 0;
    let lines = this.lines();
    for (let i = 0; i < lines.length; i++) {
      let [p1, p2] = lines[i];
      let len = p5.Vector.dist(p1, p2);
      if (len > longest) {
        hyp = lines[i];
        longest = len;
      }
    }
    return hyp;
  }
}

function pointOnLine(a, b, t) {
  return createVector(lerp(a.x, b.x, t), lerp(a.y, b.y, t));
}
