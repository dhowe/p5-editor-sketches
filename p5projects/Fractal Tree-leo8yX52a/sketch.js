let angle = 45;

function setup() {
  createCanvas(400, 400);
  background(255);
  translate(width/2, height);
  branch(100);
}

function branch(len) {
  
  if (len > 5) { // branch
    
    strokeWeight(len / 18);
    line(0, 0, 0, -len);
    translate(0, -len);

    push();
    rotate(radians(angle));
    branch(len * 0.7);
    pop();

    push(); 
    rotate(radians(-angle));
    branch(len * 0.7);
    pop();
  }
}