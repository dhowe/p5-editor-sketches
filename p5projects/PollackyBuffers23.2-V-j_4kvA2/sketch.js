let border = 75;
let steps = 4;
let seed,
  total = 10;
let sw = 2,
  maxPointDist = 10,
  maxDist = 200;
pointProb = 0.1;
let pg,
  firstLoop = false;
let paused = false;

// next: white dust on black pixels ?

function setup() {
  createCanvas(900, 600);
  pg = createGraphics(width, height);
  border = min(width,height)/10;
  pg.background(255, 1); //251, 246, 242);
  seed = Date.now();
}

function keyTyped() {
  if (key === "s" || key === "S") {
    saveCanvas("sketch" + Date.now(), "png");
  }
  if (key === "p" || key === "P") {
    paused = !paused;
  }
  if (key === "r" || key === "r") {
    pg = createGraphics(width, height);
    clear();
    paused = false;
  }
}

function draw() {
  if (!paused) {
    randomSeed(seed);
    curvedLine();
    image(pg, 0, 0);
    filter(DILATE);
    if (steps++ === total) {
      total = floor(random(10, 20));
      steps = 4;
      sw = random(1.8, 2);
      seed = Date.now();
    }
    noFill();
    rect(1, 1, width - 2, height - 2);
    //text(maxPointDist, width - 20, height - 40);

    if (++maxPointDist > maxDist) {
      maxPointDist = 10;
      firstLoop = true;
    }
  }
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
    pg.fill(random(100, 200), random(10));
  }
  // if (maxPointDist == 30) {
  //   pg.fill(200, 0, 0, 255);
  // }
  // if (maxPointDist > 195) {
  //   pg.fill(255, 200 + random(50));
  // }
  let x = 0;
  let y = 0;
  let lastX = width / 2;
  let lastY = height / 2;
  // if (frameCount/)
  if (firstLoop) {
    lastX = random(border, width - border);
    lastY = random(border, height - border);
  }

  for (let i = 0; i < steps; i++) {
    while (dist(x, y, lastX, lastY) > maxPointDist) {
      x = random(border, width - border);
      y = random(border, height - border);
    }
    //console.log('  ', x, y);
    pg.curveVertex(x, y);
    if (random() < pointProb && i > 0 && i < steps - 1) {
      pg.fill(0);
      pg.ellipse(
        x + random(-3, 3),
        y + random(-3, 3),
        random(2, 5),
        random(2, 5)
      );
      pg.noFill();
    }
    lastX = x;
    lastY = y;
    x = Number.MAX_SAFE_INTEGER;
    y = Number.MAX_SAFE_INTEGER;
  }
  pg.endShape();
}
