let x, y, sz;

function setup() {
  createCanvas(400, 400);
  noFill();
  x = random(100, 300);
  y = random(100, 300);
  sz = random(100, 150);
  background(245);
  strokeWeight(1);
  stroke(0);
  circle(x, y, sz);
  
  let count = 0;
  while (count < 50) {
    let px = random(width); 
    let py = random(height); 
    strokeWeight(3);

    if (dist(x,y,px,py)<sz/2) {
      count++;
      stroke('red');
      point(px,py);              
    }
  }
}
