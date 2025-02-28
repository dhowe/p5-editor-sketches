let imgs = [];

function preload() {
  for (let i = 1; i <= 5; i++) {
    let img = loadImage(i+".jpg");
    imgs.push(img);
  }
}

function setup() {
  createCanvas(500, 100);
}

function drawXXXX() {
  background(220);
  for (let i = 0; i < imgs.length; i++) {
    image(imgs[i], i*100, 0, 100, 100);
  }
}
