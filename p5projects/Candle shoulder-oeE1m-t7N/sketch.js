function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  for (let i = 0; i < 4; i++) {
    if (i ==0) translate(75,75);
    if (i ==1) translate(150,0);
    if (i ==2) translate(0,150);
    if (i ==3) translate(-150,0);
    //if (i ==1) translate(150,0);
    push();
    translate(50, 50);
    rotate(frameCount*(i+1));
    circle(-50, -50, 10);
    circle(50, 50, 10);
    line(-50, -50, 50, 50);
    square(-0, 0, 50);
    pop();
  }
}
