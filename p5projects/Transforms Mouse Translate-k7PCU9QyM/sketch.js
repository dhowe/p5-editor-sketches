
function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(240);

  // move to the center of the can
  translate(mouseX, mouseY);

  // draw the square at the origin
  square(0, 0, 100);
}
