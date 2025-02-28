let x, y, tx, ty, px, py;

function setup() {
  createCanvas(512, 512);
  textSize(32);
  
  x = 25;
  y =  256;
  tx = 500;
  ty = 256;
  px = x;
  py = y;
  background(245);
}

function draw() {
  

  line(x,y,px,py);
  
  px = x;
  py = y;
  
  x = lerp(x, tx, .05);
  y = lerp(y, ty, .05);
  
  let d = dist(x,y,tx,ty);
  if (d < 10) {
    tx = random(width);
    ty = random(height);
  }
  

  
}
