let x = [];
let y = [];

function setup() {
  createCanvas(400, 400);
  rectMode(CORNERS);
  for (let i = 0; i < 500; i++) {
    x.push(random(width));
    y.push(random(height));
  }
}

function draw() {
  background(220);
  stroke(0);
  for (let i = 0; i < x.length; i++) {
    fill("white");
    circle(x[i], y[i], 5);
  }
}

function mousePressed() {

}

function mouseDragged() {

}

function mouseReleased() {
}
