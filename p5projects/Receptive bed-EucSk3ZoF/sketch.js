function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  line(200,200,mouseX,mouseY)
  text(atan2(mouseY-200,mouseX-200), 20, 20);
  text(degrees(Math.atan2(mouseY-200,mouseX-200)), 20, 40);
}