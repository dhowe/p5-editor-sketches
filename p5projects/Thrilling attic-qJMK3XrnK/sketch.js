let img;

function preload() {
  img = loadImage("gu.jpg");
}

function setup() {
  createCanvas(512, 512);
  background(255);
  rectMode(CENTER);
  noStroke();
  img.loadPixels();
}

function draw() {
  background(255);
  noStroke();
  for (let j = 0; j < img.height; j++) {
    for (let i = 0; i < img.width; i++) {
      let idx = (j * width + i);
      let rgba = img.get(i, j);
      let b = brightness(rgba);
      let sz = map(b, 0, 100, 4, 0);
      fill(0);
      rect(2 + i * 4, 2 + j * 4, sz);
    }
  }
  //noLoop();
}