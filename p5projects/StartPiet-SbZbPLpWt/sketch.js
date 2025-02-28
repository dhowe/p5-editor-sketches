function setup() {
  createCanvas(400, 600);
  rectMode(CORNERS);
  background(235);
  fill(200, 0, 0);
  
  let x = random(100, width - 100);
  let y = random(100, height - 100);
  let x2 = random(100, width - 100);
  let y2 = random(100, height - 100)
  rect(x,y,x2,y2);
  line (x,0,x,height);
  line (x2,0,x2,height);
  line (0,y,width,y);
  line (0,y2,width,y2);
}