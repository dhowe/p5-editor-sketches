let walkers = [];
let walkerCount = 4;

function setup() {
  createCanvas(400, 400);

  // initialize walkers
  for (let i = 0; i < walkerCount; i++) {
    let walker = {
      x: random(width),
      y: random(height),
      size: random(10, 30),
      col: random(100, 200),
    };
    walkers.push(walker);
  }
}

function draw() {
  background(220, 32);

  // update walker positions
  for (let i = 0; i < walkers.length; i++) {
    let walker = walkers[i];
    walker.x += random(-4, 4);
    walker.y += random(-4, 4);
  }

  // draw walkers
  for (let i = 0; i < walkers.length; i++) {
    let walker = walkers[i];
    fill(walker.col, 0, 0);
    circle(walker.x, walker.y, walker.size);
  }
}
