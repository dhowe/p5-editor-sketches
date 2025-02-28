let walkers = [];
let count = 7;

function setup() {
  createCanvas(400, 400);

  // initialize walker objects
  for (let i = 0; i < count; i++) {
    walker = {
      x: random(width),
      y: random(height),
      size: random(10, 30),
      color: random(100, 200),
    };
    walkers.push(walker);
  }
}

function draw() {
  background(220, 32);

  // update ball position
  for (let i = 0; i < walkers.length; i++) {
    let walker = walkers[i];
    
    walker.x += random(-4, 4);
    walker.y += random(-4, 4);

    // check wall boundaries
    if (walker.x < 0) walker.x = width;
    if (walker.x > width) walker.x = 0;
    if (walker.y < 0) walker.y = 0;
    if (walker.y > height) walker.y = 0;

    fill(walker.color, 0, 0);
    circle(walker.x, walker.y, walker.size);
  }
}
