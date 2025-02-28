let k = 0;

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(0);
  let val = sin(frameCount/100); // -1 -> 1
  let norm = (val + 1) / 2; // 0 -> 1
  let col = norm * 255; // 0 -> 255
  ellipse(frameCount%width,map(val, -1,1,0,height), 20);
}