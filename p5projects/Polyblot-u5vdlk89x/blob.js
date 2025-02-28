const defAmount = 0.5;

class Blob {
  constructor(x = 0, y = 0, radius = 1, opts = {}) {
    this.points = [];
    this.radius = radius;
    this.center = new p5.Vector(x, y);
    let depth = opts.depth || 0; // deformation depth
    let npoints = opts.numPoints || 10;
    let amount = opts.amount || defAmount;
    if (npoints) {
      let angle = TWO_PI / npoints;
      for (let a = 0; a < TWO_PI; a += angle) {
        let sx = this.center.x + cos(a) * radius;
        let sy = this.center.y + sin(a) * radius;
        this.points.push(new p5.Vector(sx, sy));
      }
    }
    if (depth) this._deform(depth, amount);
  }

  _deform(iterations = 1, amount = defAmount) {
    for (let j = 0; j < iterations; j++) {
      for (let i = 0; i < this.points.length; i += 2) {
        let next = (i + 1) % this.points.length;
        let a = this.points[i];
        let b = this.points[next];
        let d = dist(a.x, a.y, b.x, b.y) / 2;
        let midpx = a.x - (a.x - b.x) / 2;
        let midpy = a.y - (a.y - b.y) / 2;
        let mp = new p5.Vector(midpx, midpy);
        mp.x = randomGaussian(mp.x, amount * d);
        mp.y = randomGaussian(mp.y, amount * d);
        this.points.splice(next, 0, mp);
      }
    }
    return this;
  }

  draw() {
    beginShape();
    for (let a = 0; a < this.points.length; a++) {
      vertex(this.points[a].x, this.points[a].y);
    }
    endShape(CLOSE);
  }

  render(layers = 100, depth = 4, amount = defAmount) {
    //fill(alphaDiv(layers));
    for (let j = 0; j < layers; j++) {
      Blob.deform(this, depth, amount).draw();
    }
    return this;
  }

  copy() {
    let cl = new Blob(this.center.x, this.center.y, this.radius);
    for (let a = 0; a < this.points.length; a++) {
      cl.points.push(this.points[a].copy());
    }
    return cl;
  }

  static deform(p, depth = 1, amount = defAmount) {
    let poly = p.copy();
    return poly._deform(depth, amount);
  }
}

function alphaDiv(d) {
  let col = hsb(
    ...this._renderer._cachedFillStyle
      .replace(/[^0-9,]/g, "")
      .split(",")
      .map((s, i) => (i < 3 ? parseFloat(s) : parseFloat(s) * 255))
  );
  let alpha = col.levels[3] / 255;
  col.setAlpha(alpha / d);
  return col;
}

function hsb(r, g, b, a = 255) {
  if (arguments.length === 2) {
    a = g;
    g = b = r;
  }
  let red = r / 255;
  let green = g / 255;
  let blue = b / 255;
  let alpha = a / 255;
  let val = Math.max(red, green, blue);
  let chroma = val - Math.min(red, green, blue);
  let hue, sat;
  if (chroma === 0) {
    hue = 0;
    sat = 0;
  } else {
    sat = chroma / val;
    if (red === val) {
      hue = (green - blue) / chroma;
    } else if (green === val) {
      hue = 2 + (blue - red) / chroma;
    } else if (blue === val) {
      hue = 4 + (red - green) / chroma;
    }
    if (hue < 0) {
      hue += 6;
    } else if (hue >= 6) {
      hue -= 6;
    }
  }
  colorMode(HSB, 1);
  let col = [hue / 6, sat, val, alpha];
  console.log(col);
  return color(...col);
}
