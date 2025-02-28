let walker;

function setup() {
  createCanvas(400, 400);

  // initialize walker object
  walker = {
    x: random(width),
    y: random(height),
    size: random(10, 30),
    color: random(100, 200),
  };
}

function draw() {
  background(220, 32);

  // update walker position
  walker.x += random(-4, 4);
  walker.y += random(-4, 4);

  // handle the edge of the canvas
  if (walker.x < 0) walker.x = width;
  if (walker.x > width) walker.x = 0;
  if (walker.y < 0) walker.y = 0;
  if (walker.y > height) walker.y = 0;

  // draw the walker
  fill(walker.color, 0, 0);
  circle(walker.x, walker.y, walker.size);
}
