var angle = 30;
var lenScale = .65;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(245);
  translate(width/2, height+50);
  branch(150);
  
  angle = map(mouseX, 0, width, 0, 90);
}
 
function branch(len) {
  
  line(0,0,0,-len);
  translate(0,-len);
  
  if (len > 6) {
  
    push();
    rotate(radians(angle));
    branch(len * lenScale);
    pop();

    push();
    rotate(radians(-angle));
    branch(len * lenScale);
    pop();
  }
  else {
    // nothing
  }
}
