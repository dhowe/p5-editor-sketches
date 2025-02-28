let k = 0, seed = 0, mult = 0.65, angle = 24;

function setup() {
  
  createCanvas(800, 700);
  seed = random(9999); // pick a random seed
}

function draw() {
  
  randomSeed(seed); // reuse the seed each frame
  background(255);
  translate(width / 2, height + 50);
  branch(130);  
  k += 0.01;
}

function branch(len) {
  
  if (len > 4) {       // 2 more branches
    
    stroke(0, 200);
    strokeWeight(map(len, 200, 4, 20, 0.1));
    line(0, 0, 0, -len); // draw line
    translate(0, -len); // move to end of it

    len *= random(0.6, 0.9);

    push(); // draw left branch
    rotate(radians(-angle + map(noise(k), 0, 1, -10, 10)));
    branch(len);
    pop();

    push(); // draw right branch
    rotate(radians(angle + map(noise(1000 + k), 0, 1, -10, 10)));
    branch(len);
    pop();
    
  } else {       // we are at a leaf
    
    noStroke();
    fill(random(100, 255), 0, 0, 32);
    ellipse(0, 0, random(4, 8), random(10, 20));
  }
}
