var x=0, y=0;
var tx=0, ty=0;
var px=0, py=0;
var strokeWidth = 0;

function setup() {

  createCanvas(400, 400);
  background(230);
  stroke(0);
}

function draw() {

  x = lerp(x, tx, .1);
  y = lerp(y, ty, .1);
  
  strokeWidth = lerp(strokeWidth, dist(x, y, px, py), .1);
  strokeWeight(max(.1,10-strokeWidth));
  line(x, y, px, py); // try bezier/cubics instead
  
  px = x;
  py = y;
  
  if (dist(x,y,tx,ty) < 5) {
    tx = random(width);
    ty = random(height);
  }
}
