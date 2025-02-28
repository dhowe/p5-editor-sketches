let img;

function preload() {
  img = loadImage("trumped.jpg");
}

function setup() {
  createCanvas(512, 512);
  background(255);
  noStroke();
  rectMode(CENTER);
  img.loadPixels();
  for (let j = 0; j < img.height; j++) {
    for (let i = 0; i < img.width; i++) {
      let pixColArr = img.get(i, j);
      let gray = pixColArr[0];
      fill(gray);
      rect(i*4+2,j*4+2,3);
    }
  }
}
