let seed = 0, theta = 0;
let lscale = 0.52, k = 0;
let wind = 0.2, blen = 0.2;

function setup() {
  createCanvas(600, 400);
  seed = random(1000000);
  theta = PI / 9;
  noFill();
}

function draw() {
  background(152, 205, 246);

  push();

  noStroke();
  fill(100, 150, 100);
  rotate(-0.01, 0);
  rect(-100, height - 100, width * 2, height);

  push();
  stroke(0);
  translate(width / 2, height + 100);
  randomSeed(seed);
  branch(200, 1);
  k += 0.02;
  pop();
  
  pop();

  noStroke();
  // rotate(.02, 0);
  // fill(200,0,0);
  fill(100, 150, 100);
  rect(0, height - 50, width, height);
}

function mouseClicked() {
  seed = random(1000000);
}

function branch(len, depth) {
  strokeWeight(len / random(9, 11));
  oline(0, 0, 0, -len, len / 10);
  translate(0, -len);

  // draw two or three branches
  if (len > 1) {
    push();
    let ls = lscale + random(-blen, blen);
    if (depth == 1) ls = 0.5;
    rotate(theta + map(noise(k), 0, 1, -wind, wind));
    branch(len * ls, depth + 1);
    pop();

    push();
    rotate(-theta + map(noise(k + 400), 0, 1, -wind, wind));
    if (depth > 1) ls = lscale + random(-blen, blen);
    branch(len * ls, depth + 1);
    pop();

    if (random() < 0.8) {
      push();
      rotate(map(noise(k + 490), 0, 1, -wind, wind));
      ls = lscale + random(-blen, blen);
      branch(len * ls, depth + 1);
      pop();
    }
  }

  // draw the leaves
  strokeWeight(random(5, 10));
  //stroke(random(150,225), random(100, 200), 0, random(64, 128));
  stroke(random(100, 255), 0, 0, 32);
  line(0, 0, random(-10, 10), random(-10, 10));
}

// a more natural looking line
function oline(x1, y1, x2, y2, weight) {
  strokeCap(ROUND);
  strokeWeight(weight);
  let xd = x2 - x1;
  let yd = y2 - y1;
  let dist = sqrt(xd * xd + yd * yd);
  let sections = ceil(dist / 10.0);
  let twist,
    twist2 = new Array(sections + 1);
  for (let i = 0; i < twist2.length; i++) {
    twist2[i] = 0.0;
  }
  let twisti = 1 + weight / 24.0;
  for (let i = 0; i < sections; i++) {
    twist = random(-twisti, twisti);
    let tx1 = x1 + (xd / sections) * i + twist2[i];
    let tx2 = x1 + (xd / sections) * (i + 1) + twist;
    let ty1 = y1 + (yd / sections) * i;
    let ty2 = y1 + (yd / sections) * (i + 1);
    if (i == sections - 1) {
      tx2 = x2;
      ty2 = y2;
    }
    line(tx1, ty1, tx2, ty2);
    twist2[i + 1] = twist;
  }
}
