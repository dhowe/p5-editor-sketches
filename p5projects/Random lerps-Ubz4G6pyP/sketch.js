let x = 25, y = 25;
let tx = 350, ty = 375;

function setup() {
  createCanvas(400, 400);
  noStroke();
  saveGif('mySketch', 6);
}

function draw() {
  background(245);

  fill('red');
  circle(tx, ty, 5);
  
  fill(0);
  circle(x, y, 10);
  

  // move 5% of the way to the target
  x = lerp(x, tx, 0.05);
  y = lerp(y, ty, 0.05);

  let d = dist(x, y, tx, ty);
  
  // if we're close enough, pick a new target
  if (d < 7) {
    tx = random(50,width-50);
    ty = random(50, height-50);
  }
}
