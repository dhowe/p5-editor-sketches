

let imgs = [];

function preload() {
  for (let i = 1; i <= 9; i++) {
    let img = loadImage(i+".jpg");
    imgs.push(img);
  }
}

function setup() {

  createCanvas(400, 400);
}

function draw() {

  background(0);
  image(img, 0, 0, width, height);
}

