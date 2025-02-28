let x = [], y = [], sz = [];

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER,CENTER);
  noStroke();
  fill(255);
}

function mousePressed() {
  x.push(mouseX);
  y.push(mouseY);
  sz.push(4);
}

function draw() {
  background(0);
  
  for (let i = 0; i < x.length; i++) {
    textSize(sz[i]);
    text("O", x[i], y[i]);
    x[i] += random(-2,2);
    y[i] += random(-2,2);
  }
  
  if (mouseIsPressed) {
    sz[sz.length-1]++;
  }
}
