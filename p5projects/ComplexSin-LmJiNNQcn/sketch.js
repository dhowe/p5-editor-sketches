let x = 0, y = 0;

function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(20);
  fill(255);
  circle(
    200+sin(x)*100,
    200+sin(y)*100,
    40);
  x += 0.04;
  y += 0.05;
}