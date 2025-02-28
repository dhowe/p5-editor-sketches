let levels = 8;
let seed, angle = 24;
let lengthScale = 0.78;

function setup() {
  createCanvas(800, 600);
  angleMode(DEGREES);
  seed = random(9999);
}

function draw() {
  background(70, 70, 90);
  fill(120, 150, 250);
  rect(0, 0, width, height * 0.85);

  push();
  randomSeed(seed);
  translate(width / 2, height + 10);
  branch(130, levels);
  textAlign(CENTER);
  textSize(20);
  fill(0);
  pop();
  //text("fps=" + round(frameRate()), 20, 30);
}

function branch(len, depth = 0) {
  if (depth < levels - 3 && random() < 0.05) return;

  if (depth < 0 || len < 2) {
    fill(random(50), random(100, 255), 0, random(30, 70));
    ellipse(0, 0, noise(len*100)*20, random(15, 30));
    fill(random(200), 0, 0, random(30, 40));
    ellipse(0, 0, -random(10, 15), -random(10, 25));
    return;
  }

  let sw = map(depth, 0, levels, 1, 12);
  oline(0, 0, random(-len / 40, len / 40), -len, depth == levels ? 16 : sw);
  strokeWeight(map(depth, 0, levels, 0, 11));
  translate(0, -len);

  push();
  let a1 = angle + map(noise(frameCount / 200), 0, 1, -15, 15);
  rotate(a1);
  branch(len * (lengthScale + random(-0.2, 0)), depth - 1);
  pop();

  let haveCenter = false;
  if (depth < levels - 2 && random() < 1 - depth / 10) {
    // center branch
    haveCenter = true;
    push();
    let a2 = angle / 10 + map(noise(frameCount / 199), 0, 1, -15, 15);
    rotate(random(a2));
    branch(len * (lengthScale + random(-0.1, 0.1)), depth - 1);
    pop();
  }

  if (!haveCenter && depth < levels - 2 && random() < 1 - depth / 10) {
    // center branch
    push();
    let a2 = angle / 10 + map(noise(frameCount / 290), 0, 1, -15, 15);
    rotate(random(-a2, 0));
    branch(len * (lengthScale + random(-0.1, 0.1)), depth - 1);
    pop();
  }

  push();
  let a3 = angle + map(noise(frameCount / 99), 0, 1, -5, 5);
  rotate(-a3);
  branch(len * (lengthScale + random(-0.1, 0.1)), depth - 1);
  pop();
}


// a handrawn line from segments
function oline(x1, y1, x2, y2, sw) {
  strokeCap(ROUND);
  strokeWeight(sw);
  y2 += sw / 5;
  let wght = 1 + sw / 24.0;
  let xd = x2 - x1, yd = y2 - y1;
  let dst = sqrt(xd * xd + yd * yd);
  let sects = ceil(dst / 10.0);
  let arr = Array(sects + 1).fill(0);
  for (let i = 0; i < sects; i++) {
    let tw = random(-wght, wght);
    let tx1 = x1 + (xd / sects) * i + arr[i];
    let tx2 = x1 + (xd / sects) * (i + 1) + tw;
    let ty1 = y1 + (yd / sects) * i;
    let ty2 = y1 + (yd / sects) * (i + 1);
    if (i == sects - 1) {
      tx2 = x2;
      ty2 = y2;
    }
    line(tx1, ty1, tx2, ty2);
    arr[i + 1] = tw;
  }
}
