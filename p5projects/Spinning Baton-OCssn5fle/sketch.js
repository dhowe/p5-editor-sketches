let len = 40;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  translate(width/2, height/2);
  rotate(frameCount/100);
  line(-len,-len, len, len);
  circle(-len, -len, 10);
  circle(len, len, 10);
}