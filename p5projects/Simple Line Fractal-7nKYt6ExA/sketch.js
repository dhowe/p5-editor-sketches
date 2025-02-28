
function setup() {
  createCanvas(600, 600);
  noFill();
}

function draw() {
  background(240);
  reline(width/2, height/2, 300);
}

function reline(x, y, size) {
  if (size < 1) return; // base-case
  
  let cScale =  1.5;
  if (mouseX > 0) {
    cScale = map(mouseX, 0, width, 0, 4, true);
  }
  circle(x, y, size * cScale);
  
  let newSize = size/2;
  reline(x - newSize, y, newSize);
  reline(x + newSize, y, newSize);  
}