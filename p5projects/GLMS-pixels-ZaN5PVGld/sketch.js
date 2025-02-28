let img, iw, ih;

function preload() {
  img = loadImage("grace-lau-mo-sheung.jpg");
}

function setup() {
  createCanvas(512, 512);
  rectMode(CENTER);
  noStroke();
  iw = width/img.width;
  ih = height/img.height;
  img.loadPixels();
}

function draw() {
  background(255);
  for (let j = 0; j < img.height; j++) {
    for (let i = 0; i < img.width; i++) {
      let idx = (j * width + i);
      fill(img.get(i, j));
      rect(i*iw+iw/2,j*ih+ih/2,random(5,20));
    }
  }
}