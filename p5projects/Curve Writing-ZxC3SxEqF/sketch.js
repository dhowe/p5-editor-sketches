let border = 75;
let pg, pb =0, steps = 4, sw = {min: 0.5, max: 2};
let seed, total = 10, dilate = 1;

function setup() {
  createCanvas(900, 600);
  pg = createGraphics(width, height);
  pg.background(251, 246, 242);
  if (dilate)  sw = {min: 2, max: 4};
  pg.strokeWeight(random(sw.min, sw.max));
  seed = Date.now();
}

function percentBlack() {
  loadPixels();

  let total = 0;
  let black = 0;
  const d = pixelDensity();
  for (let x = border; x < width - border; x++) {
    for (let y = border; y < height - border; y++) {
      const i = 4 * d * (y * d * width + x);
      const [r, g, b] = [pixels[i], pixels[i + 1], pixels[i + 2]];
      total++;
      if (r <= 80 && b <= 80 && g <= 80) {
        black++;
      }
    }
  }
  return black / total;
}

function draw() {
  randomSeed(seed);
  curvedLine();
  image(pg, 0, 0);
  if (dilate) {filter(DILATE);filter(DILATE);}
  if (steps++ === total) {
    pb = percentBlack();
    total = floor(random(20, 40));
    steps = 4;
    pg.strokeWeight(random(sw.min, sw.max));
    seed = Date.now();
  }
  text(round(pb*10000)/100 + '%', 10, height -20);
}

function curvedLine() {
  //pg.fill(251, 246, 242,2);
  pg.fill(251, 246, 242, 128);
  pg.noFill();
  pg.stroke(0);
  pg.beginShape();
  let x = 0;
  let y = 0;
  let lastX = width / 2;
  let lastY = height / 2;
  for (let i = 0; i < steps; i++) {
    let d = 0;
    while (d > 100 || d < 10) {
      x = random(border, width - border);
      y = random(border, height - border);
      d = dist(x, y, lastX, lastY);
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