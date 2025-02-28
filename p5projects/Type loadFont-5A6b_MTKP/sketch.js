let font;

function preload() {
  font = loadFont('./LEDLIGHT.otf');
}

function setup() {
  createCanvas(400, 400);
  textFont(font, 300);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
  stroke(255,0,0);
  fill(255);
  
  text("Hi", width/2, height/2);
}