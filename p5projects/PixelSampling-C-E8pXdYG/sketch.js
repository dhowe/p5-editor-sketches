let img;

function preload() {
  img = loadImage("flower.jpg");
}

function setup() {
  createCanvas(512, 512);
  image(img,0,0);
  img.loadPixels();
}

function draw() {
  background(255);
  noStroke();
  randomSeed(0);
  let size = floor(map(mouseX, 0, width, 52,  1, true));

  for (let x = 0; x < img.width; x += size) {
    for (let y = 0; y < img.height; y += size) {
      let index = (x + y * img.width) * 4;

      // point-sampling
      let r = img.pixels[index];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2]

      fill(r, g, b);
      circle(x+size/2, y+size/2, size);
    }
  }
}
