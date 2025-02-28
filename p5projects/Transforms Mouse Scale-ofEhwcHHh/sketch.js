
function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(240);

  // move to the center of the can
  translate(width/2, height/2);
  
  // scale based on the mouse
  scale(mouseX/50, mouseY/50);

  // draw the square at the origin
  square(0, 0, 100);
}
