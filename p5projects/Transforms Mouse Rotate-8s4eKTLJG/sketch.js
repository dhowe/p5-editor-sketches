
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);

  // move to the center of the can
  translate(width/2, height/2);
  
  // scale based on the mouse
  rotate(mouseX/50);

  // draw the square at the origin
  square(0, 0, 100);
}
