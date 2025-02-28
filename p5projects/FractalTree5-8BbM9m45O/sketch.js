let seed = 0;
let noiseStep = 0;

function mouseClicked() {
  seed = random(999999);
}
function setup() {
  createCanvas(500, 400);
  seed = random(999999);
}

function draw() {
  background(220);
  stroke(0);
  translate(width / 2, height + 50);
  randomSeed(seed);
  branch(150);
  noiseStep += 0.05;
}

function branch(len) {
  if (len > 2) {
    strokeWeight(len / 12);
    line(0, 0, 0, -len);
    translate(0, -len);

    push();
    rotate(radians(random(20, 40) + noise(noiseStep) * 5));
    branch(len * random(0.5, 0.6));
    pop();

    if (random() < 0.5) {
      push();
      rotate(radians(random(2, 12) + noise(noiseStep + 100) * 5));
      branch(len * random(0.5, 0.6));
      pop();
    }

    if (random() < 0.5) {
      push();
      rotate(radians(random(-2, -12) + noise(noiseStep + 100) * 5));
      branch(len * random(0.5, 0.6));
      pop();
    }

    push();
    rotate(radians(random(-20, -40) + noise(noiseStep + 1000) * 5));
    branch(len * random(0.5, 0.7));
    pop();
    
  } else {
    noStroke();
    fill(0, random(100, 200), 0, 100);
    ellipse(0, 0, random(2, 5), random(10, 15));
  }
}
