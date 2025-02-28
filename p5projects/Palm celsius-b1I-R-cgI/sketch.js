let x, y, tx, ty;

function setup() {
  createCanvas(512, 512);
  textSize(32);
  
  x = 25;
  y =  256;
  tx = 500;
  ty = 256;
}

function draw() {
  
  background(245);

  circle(x,y, 10);
  
  x = lerp(x, tx, .05);
  y = lerp(y, ty, .05);
  
  let d = dist(x,y,tx,ty);
  if (d < 10) {
    tx = random(width);
    ty = random(height);
  }
  

  
}
