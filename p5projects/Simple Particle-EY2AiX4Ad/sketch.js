let x = -10, y = 0;
let xspd = 0, yspd = 0;
let xacc = 0, yacc = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  x += xspd;
  y += yspd;
  xspd += xacc;
  yspd += yacc;
  circle(x,y,10);
}

function mouseClicked() {
  x = mouseX;
  y = mouseY;
  xacc= 0;
  yacc= 0.1;
  xspd = 0;
  yspd = -2;
}