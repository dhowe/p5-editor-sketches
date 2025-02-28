// adapted from https://www.nayuki.io/page/convex-hull-algorithm
class ConvexHull {
  
  constructor(data) {
    // TODO: convert to work on arrays
    this.data = data;
    let points = data.slice();
    if (points.length) {
      if (Array.isArray(points[0])) {
        //console.log("converting points array to {x,y} objects");
        points = points.map((p) => ({ x: p[0], y: p[1] }));
      }
      points.sort((a, b) => {
        if (a.x < b.x) return -1;
        else if (a.x > b.x) return +1;
        else if (a.y < b.y) return -1;
        else if (a.y > b.y) return +1;
        else return 0;
      });
      let upperHull = this._makeUpper(points);
      let lowerHull = this._makeLower(points);
      this.path = !this._equalsSingle(upperHull, lowerHull)
        ? upperHull.concat(lowerHull)
        : upperHull;
    }
  }

  _equalsSingle(upperHull, lowerHull) {
    return (
      upperHull.length == 1 &&
      lowerHull.length == 1 &&
      upperHull[0].x == lowerHull[0].x &&
      upperHull[0].y == lowerHull[0].y
    );
  }

  _makeLower(points) {
    let lowerHull = [];
    for (let i = points.length - 1; i >= 0; i--) {
      let p = points[i];
      while (lowerHull.length >= 2) {
        let q = lowerHull[lowerHull.length - 1];
        let r = lowerHull[lowerHull.length - 2];
        if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) {
          lowerHull.pop();
        } else break;
      }
      lowerHull.push(p);
    }
    lowerHull.pop();

    return lowerHull;
  }

  _makeUpper(points) {
    let upperHull = [];
    for (let i = 0; i < points.length; i++) {
      let p = points[i];
      while (upperHull.length >= 2) {
        let q = upperHull[upperHull.length - 1];
        let r = upperHull[upperHull.length - 2];
        if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) {
          upperHull.pop();
        } else break;
      }
      upperHull.push(p);
    }
    upperHull.pop();

    return upperHull;
  }

  area() {
    let total = 0,
      vertices = this.path;
    for (let i = 0, l = vertices.length; i < l; i++) {
      let addX = vertices[i].x;
      let addY = vertices[i == vertices.length - 1 ? 0 : i + 1].y;
      let subX = vertices[i == vertices.length - 1 ? 0 : i + 1].x;
      let subY = vertices[i].y;
      total += addX * addY * 0.5;
      total -= subX * subY * 0.5;
    }
    return Math.abs(total);
  }

  draw(showPoints) {
    if (!this.data.length || typeof beginShape === "undefined") return;

    //console.log(this.path);
    beginShape();
    this.path.forEach((h) => vertex(h.x, h.y));
    endShape(CLOSE);
    stroke(0);
    if (showPoints) this.data.forEach((h) => point(h[0], h[1]));
  }

  drawAsLines(hidePoints) {
    if (!points.length || typeof line === "undefined") return;
    let h = this.path;
    for (let i = 0; i < h.length; i++) {
      let j = (i + 1) % h.length;
      line && line(h[i].x, h[i].y, h[j].x, h[j].y);
    }
  }
}
