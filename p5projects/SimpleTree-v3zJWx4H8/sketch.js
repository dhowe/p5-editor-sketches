let seed, n;

function setup() {
  createCanvas(400, 400);
  seed = random(1000);
  n = random(1000);
}

function draw() {
  background(255);
  randomSeed(seed);
  translate(width / 2, height + 80);
  scale(1, 1, 1);
  branch(150);
  n += 0.02;
}

function branch(len) {
  
  if (len > 3) { // branch
    
    strokeWeight(len / 18 + random(-.5, .5));
    line(0, 0, 0, -len);
    translate(0, -len);

    push(); // noise gets n here
    rotate(radians(map(noise(n), 0, 1, 30, 40)));
    branch(len * random(.45, .65));
    pop();

    push(); // noise gets n+100 here
    rotate(radians(map(noise(n + 100), 0, 1, -30, -40)));
    branch(len * random(.45, .65));
    pop();

    if (random() < .4) {
      push(); // noise gets n+200 here
      rotate(radians(map(noise(n + 200), 0, 1, 5, 20)));
      branch(len * random(.45, .65));
      pop();
    }

    if (random() < .4) {
      push(); // noise gets n+300 here
      rotate(radians(map(noise(n + 300), 0, 1, -5, -20)));
      branch(len * random(.45, .65));
      pop();
    }
    
  } else {  // leaf
    
    noStroke();
    fill(random(100), random(255), random(100), 50 + random(50, 100));
    ellipse(0, 0, len, len * random(10, 20));
  }
}