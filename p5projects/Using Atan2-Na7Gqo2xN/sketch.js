function setup() {
  createCanvas(400, 400);
  textSize(24);
}

function draw() {
  background(220);
  line(200,200,mouseX,mouseY);
  circle(200, 200, 10);
  circle(mouseX, mouseY, 10);
  let ang = angleBetween(200,200,mouseX,mouseY);
  text('angle='+round(degrees(ang)), 10, 30);
}

function angleBetween(ax, ay, bx, by) {
  let dy = by - ay;
  let dx = bx - ax;
  return atan2(dy, dx); // range (-PI, PI]
}