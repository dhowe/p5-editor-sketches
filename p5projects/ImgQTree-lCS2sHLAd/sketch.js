
let img, tree;

function preload() {
  img = loadImage("flower.jpg");
}

function setup() {
  createCanvas(512, 512);
  tree = new QuadTree(img, 0, 0, width, height);
  frameRate(3);
  //tree.render();
}

function draw() {
  tree.render(frameCount);
  if (frameCount > 50) noLoop();
}

class QuadTree {

  static maxVariance = 8;

  constructor(img, x, y, w, h) {
    const { mean, variance } = colorData(img, x, y, w, h);
    this.img = img;
    this.color = mean;
    this.divided = false;
    this.boundary = { x, y, w, h };
    this.variance = variance;
    if (variance > QuadTree.maxVariance && w > 4 && h > 4) this.subdivide();
  }

  render(depth = 99) {
    let { x, y, w, h } = this.boundary;
    stroke(150);
    noFill();
    fill(this.color);
    rect(x, y, w, h);
    if (depth > 0 && this.divided) {
      this.nw.render(--depth);
      this.ne.render(--depth);
      this.sw.render(--depth);
      this.se.render(--depth);
    }
  }

  subdivide() {
    let { x, y, w, h } = this.boundary;
    this.nw = new QuadTree(this.img, x, y, w / 2, h / 2);
    this.ne = new QuadTree(this.img, x + w / 2, y, w / 2, h / 2);
    this.sw = new QuadTree(this.img, x, y + h / 2, w / 2, h / 2);
    this.se = new QuadTree(this.img, x + w / 2, y + h / 2, w / 2, h / 2);
    this.divided = true;
  }
}


function colorData(img, x, y, w, h) {

  const getPixels = (img, rx, ry, rw, rh) => {
    if (!img.pixels.length) img.loadPixels();
    let result = [], pix = img.pixels;
    for (let x = 0; x < rw; x++) {
      for (let y = 0; y < rh; y++) {
        const k = 4 * ((y + ry) * width + (x + rx));
        result.push(pix[k], pix[k + 1], pix[k + 2], pix[k + 3]);
      }
    }
    return result;
  }

  const weightedMean = (histogram) => {
    let total = 0, value = 0;
    for (let i = 0; i < 256; ++i) {
      total += histogram[i], value += histogram[i] * i;
    }
    value /= total;
    let error = 0;
    for (let i = 0; i < 256; ++i) {
      error += (value - i) ** 2 * histogram[i];
    }
    let stdDev = Math.sqrt(error / total);
    return [value, stdDev];
  }

  const colorTable = (data) => {
    const histogram = new Uint32Array(1024);
    for (let i = 0, n = data.length; i < n; i += 4) {
      ++histogram[0 * 256 + data[i + 0]];
      ++histogram[1 * 256 + data[i + 1]];
      ++histogram[2 * 256 + data[i + 2]];
      ++histogram[3 * 256 + data[i + 3]];
    }
    return histogram;
  }

  if (!img.pixels.length) img.loadPixels();

  // adapted from mike bostock
  let histogram = colorTable(getPixels(img, x, y, w, h));
  const [r, rsd] = weightedMean(histogram.subarray(0, 256));
  const [g, gsd] = weightedMean(histogram.subarray(256, 512));
  const [b, bsd] = weightedMean(histogram.subarray(512, 768));

  // adjust according to perceived brightness (luminance)
  let variance = rsd * 0.2989 + gsd * 0.5870 + bsd * 0.1140;

  return { mean: color(r, g, b), variance };
}

