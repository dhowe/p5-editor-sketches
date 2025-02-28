let i= 0, imgs = [], font;

function preload() {
  font = loadFont("acmesa.ttf");
  for (let i = 0; i < 5; i++) {
	imgs[i] = loadImage((i+1)+".jpg");
  }
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255);
  image(imgs[0],0,0,500,500);
  fill(255);
  textFont(font);
  textSize(70);
  strokeWeight(5);
  stroke(0,255, 255);
  text("HELLO SCM!", 20, 120)
}