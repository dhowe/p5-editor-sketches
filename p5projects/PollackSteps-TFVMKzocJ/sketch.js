let border = 75;
let steps = 4;
let seed,
  total = 10;
let sw = 2.3;

function setup() {
  createCanvas(900, 600);
  frameRate(10);
}

function mouseClicked() {
  saveCanvas(frameCount+'.png');
}
  
function draw() {
  background(255);//251, 246, 242);
  doIt();
}

function doIt() {
  seed = Date.now();
  for (; steps <= total; steps++) {
    randomSeed(seed);
    curvedLine();
  }
  total = floor(random(10, 20));
  steps = 4;
  sw = random(1.5, 3);
  seed = Date.now();
}

function curvedLine() {
  noFill();
  stroke(0);
  strokeWeight(sw);
  beginShape();
  let x = 0;
  let y = 0;
  let lastX = 200;
  let lastY = 200;
  let s = "curvedLine(sw=" + sw + ", ";
  let points = 0;
  for (let i = 0; i < steps; i++) {
    while (dist(x, y, lastX, lastY) > 50) {
      x = random(border, width - border);
      y = random(border, height - border);
    }
    // s+= `[${round(x)},${round(y)}], `;
    curveVertex(x, y);
    lastX = x;
    lastY = y;
    x = 1000;
    y = 1000;
    points++;
  }
  endShape();
  filter(DILATE);
  // print(s+points+' pts)');
}
