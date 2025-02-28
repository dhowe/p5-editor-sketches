let img, tree;
let circles = 1, stop = 5;

function preload() {
  img = loadImage("tulip.jpg");
}

function setup() {
  createCanvas(1024, 1024);
  noStroke();
  frameRate(2);
  
  tree = new ColorTree(img, 0, 0, width, height);
}

function draw() {
  clear();
  tree.render(frameCount);
  if (frameCount == stop) noLoop();
}

function mouseClicked() {
  stop = 30;
  loop();
}



let maxVariance = 2;

class ColorTree {
  
  constructor(img, x, y, w, h) {
    this.img = img;
    this.divided = false;
    this.boundary = { x, y, w, h };
    this.colorize(img, x, y, w, h);
    
    if (w > 4 && this.variance > maxVariance) {
      this.subdivide();
    }
  }

  render(depth = 99) {
    let { x, y, w, h } = this.boundary;

    // fill(255) && text(this.variance.toFixed(2), x + 5, y + 15);
    
    if (depth-- > 0 && this.divided) {
      this.nw.render(depth);
      this.ne.render(depth);
      this.sw.render(depth);
      this.se.render(depth);
    }
    else {
      fill(this.color);
      if (circles) {
        ellipse(x+w/2, y+h/2, w, h);
      }
      else {
        rect(x, y, w, h);
      }
    }
  }

  subdivide() {
    let { x, y, w, h } = this.boundary;
    this.nw = new ColorTree(this.img, x, y, w / 2, h / 2);
    this.ne = new ColorTree(this.img, x + w / 2, y, w / 2, h / 2);
    this.sw = new ColorTree(this.img, x, y + h / 2, w / 2, h / 2);
    this.se = new ColorTree(this.img, x + w / 2, y + h / 2, w / 2, h / 2);
    this.divided = true;
  }

  // sets this.color to average and this.variance to variance
  colorize(img, x, y, w, h) {
    let cdata = colorData(img, x, y, w, h);
    this.color = cdata.average;
    this.variance = cdata.variance;
  }
}
