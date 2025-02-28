let img; 

function preload() {
  img = loadImage("obama.png");
}

function setup() {
  createCanvas(800, 600);
  pixelDensity(1);
  background(220);
  noStroke();
  
  let pix = getPixels(img);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let idx = (width * y + x);
      fill(pix[idx]);
      circle(x,y,3);
    }
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

