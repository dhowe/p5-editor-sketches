let theta = 30, lenScale = 0.65;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  background(255);
  translate(width/2, height); // start at bottom center
  branch(200);
}

function branch(len) {
  
  line(0,0,0,-len);  // draw first branch
  translate(0,-len); // move to end

  if (len > 5) {

    len *= lenScale;
    push();
    rotate(theta + random(-15, 15)); // rotate right
    branch(len); // draw right shorter branch
    pop();

    push();
    rotate(-theta + random(-15, 15)); // rotate right
    branch(len); // draw left shorter branch
    pop();
  }
}
