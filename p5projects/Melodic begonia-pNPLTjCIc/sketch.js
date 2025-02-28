
let myImage;

function preload() {
  myImage = loadImage("blow-up-your-own-head.jpg");
}

function setup() {
  createCanvas(400, 400);
}

function draw() 
  background(200);
  image(myImage, 0, 0);
}
