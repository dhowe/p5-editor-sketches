let img;

function preload() {
  img = loadImage("daniel.png");
}

function setup() {
  createCanvas(500, 500);
  pixelDensity(1);
  background(245);
  noStroke();

  let pixels = getPixels(img);
  for (let i = 0; i < pixels.length; i++) {
    fill(pixels[i]);
    let x = i % img.width;
    let y = floor(i / img.width);
    ellipse(x * 10 + 5, y * 10 + 5, 10);
  }
}

function getPixels(image) {
  let pix = [];
  image.loadPixels();
  for (let y = 0; y < image.height; y++) {
    for (let x = 0; x < image.width; x++) {
      let idx = (image.width * y + x) * 4;
      let r = image.pixels[idx];
      let g = image.pixels[idx + 1];
      let b = image.pixels[idx + 2];
      let a = image.pixels[idx + 3];
      pix.push(color(r, g, b, a));
    }
  }
  return pix;
}
