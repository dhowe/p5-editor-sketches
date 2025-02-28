
let circles = [];
let img, pix;
let stopped = 0;
let fails = 1500;

function preload() {
  img = loadImage("obama.png");
}

function setup() {
  createCanvas(800, 600);
  background(240);
  noFill();
  pix = getPixels(img);
}

function draw() {
  doSearch();
  background(255);
  circles.forEach(([x, y, sz]) => {
    //circle(x, y, stopped ? 2 : .1);
    circle(x, y, stopped ? 0 : sz*2);
  });
}

function doSearch() {
  
  let adds = 0;
  for (let i = 0; i < fails; i++) {
	let x = floor(random(width));
    let y = floor(random(height));
    let col = pix[width * y + x];
    
    let sz = map(col,0,255,2,15);
    if (!collides(x, y, sz)) {
      circles.push([x, y, sz]);
      adds++;
    }	
  }
  if (!adds) {
    //stopped = true;
    noLoop();
    console.log('done');
  }
}


function getPixels(im) {
  let pix = [];
  im.loadPixels();
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let i = (width * y + x) * 4;
      pix.push(im.pixels[i]);
    }
  }
  return pix;
}

function collides(cx, cy, radius) {
  for (let j = 0; j < circles.length; j++) {
    [x, y, r] = circles[j];
    if (overlaps(x, y, r, cx, cy, radius)) {
      return true;
    }
  }
  return false;
}

function overlaps(x, y, r, x1, y1, r1) {
  return dist(x, y, x1, y1) < r1 + r;
}
