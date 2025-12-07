function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(250);
  let thickness = map(mouseX, 0, width, 1, 100);
  fill(0, 1/thickness*255)
  rect(width/2,height/2,width,thickness);
}