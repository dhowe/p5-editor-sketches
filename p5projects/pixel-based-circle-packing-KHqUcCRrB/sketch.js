let img;
function preload() {
  img = loadImage("cloud.png")
}

function setup() {
  createCanvas(400, 400);
  background(0);
  angleMode(DEGREES);
  image(img, 50, 50, 300, 300);
  fill(255);
}

function draw() {
  for (let i=0; i < 10; i++){
    newCircle();
  }
}

function newCircle(){
  let cx = random(10, width-10);
  let cy = random(10, height-10); 
  let radius = random(1,15); 
  let circleSteps = 24;
  for (let i=0; i < circleSteps; i++){
    let angle = map(i, 0, circleSteps, 0, 360); 
    let px = int(cx + radius * cos(angle)); 
    let py = int(cy + radius * sin(angle)); 
    let pixColor = get(px, py); 
    if (red(pixColor) > 100) return;
  }
  circle(cx, cy, radius*2); 
}

