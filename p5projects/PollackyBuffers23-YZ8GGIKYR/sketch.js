let border = 75;
let steps = 4;
let seed, total = 10;
let sw = 2, maxPointDist = 50;
  pg;

function setup() {
  createCanvas(900, 600);
  pg = createGraphics(width, height);
  pg.background(255,1)//251, 246, 242);
  seed = Date.now();
}


function draw() {
  randomSeed(seed);
  maxPointDist = 10+frameCount%400;
  curvedLine();
  image(pg, 0, 0);
  filter(DILATE);
  if (steps++ === total) {
    total = floor(random(10, 20));
    steps = 4;
    sw = random(1.8, 3);
    seed = Date.now();
  }
  text()
}

function curvedLine() {
  // let c = color(random(156),
  //   random(156),
  //   random(156));
  // if (random() < .7) c = 0;
  
  pg.stroke(0);
  pg.strokeWeight(sw);
  pg.beginShape();
  pg.noFill();
  if (maxPointDist > 50) {
    pg.fill(random(100,200),random(10));
  }
  if (maxPointDist == 30) {
    pg.fill(200,0,0,255);
  }
  let x = 0;
  let y = 0;
  let lastX = 200;
  let lastY = 200;

  for (let i = 0; i < steps; i++) {
    while (dist(x, y, lastX, lastY) > maxPointDist) {
      x = random(border, width - border);
      y = random(border, height - border);
    }
    //console.log('  ', x, y);
    pg.curveVertex(x, y);
    lastX = x;
    lastY = y;
    x = 1000;
    y = 1000;
  }
  pg.endShape();
}