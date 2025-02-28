function setup() {
  createCanvas(500, 400);
  textSize(32)
}
function draw() {
  background(255);
  square(100,100, 50);
  text(winMouseX + "," + winMouseY, 20, 40);
}
