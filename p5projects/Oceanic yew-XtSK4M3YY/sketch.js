let angle = 30, seed,
  lenScale = 0.7, k = 10, j = 100;

function setup() {
  createCanvas(800, 600);
  angleMode(DEGREES);
  seed = random(999999);
}

function draw()  {
  background(245);
  randomSeed(seed);
  translate(width / 2, height+50);
  branch(200);
  k += 0.005;
  j += 0.006;
}

function branch(len) {
  if (len > 10) {
    strokeWeight(len/15);
    line(0, 0, 0, -len); 
    translate(0, -len);

    push(); // rotate left and branch
    let mn = map(noise(k), 0, 1, -10, 10);
    rotate(-angle+ random(-10,10) + mn);
    branch(len * lenScale + random(-.2,.2));
    pop();

    push(); // rotate right and branch
    mn = map(noise(100+j), 0, 1, -10, 10);

    rotate(angle+ random(-10,10) + mn);
    branch(len * lenScale + random(-.2,.2));
    pop();
  }
  else {
    fill(random(100,255),0,0, 50);
    rect(0,0,random(20), random(20));
  }
}
