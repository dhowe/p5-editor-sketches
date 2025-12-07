let cx = 300,
  cy = 250,
  rad = 20;
let xs = [],
  ys = [];

function setup() {
  createCanvas(600, 500);
  angleMode(DEGREES);
}

function draw() {
  background(20);
  noFill();
  stroke(200);
  strokeWeight(15);
  //circle(cx, cy, 495); // outside
  
  let sz = 55;
  let x = cx + cos((frameCount % 120) * 3) * sz;
  let y = cy + sin((frameCount % 120) * 3) * sz;
  noStroke();
  fill(200);
  circle(x, y, sz); // center

  stroke(200);
  noFill();
  let szs = [90, 137, 180, 225, 275];
  let offsets = [36, 16, 16, 11.5, 13.5];
  let lx = x, ly = y;
  for (let i = 0; i < 5; i++) {
    let sz2 = 40 + (i + 1) * offsets[i];
    let x2 = cx + cos((frameCount % 120) * 3) * sz2;
    let y2 = cy + sin((frameCount % 120) * 3) * sz2;
    strokeWeight(15);
    stroke(200);
    circle((lx + x2) / 2, (ly + y2) / 2, szs[i]);
    strokeWeight(3);
    stroke('red');
    line(lx,ly,x2,y2);
    lx = x2;
    ly = y2;
  }
}
