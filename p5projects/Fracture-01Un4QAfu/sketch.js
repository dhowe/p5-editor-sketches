let colors, fracture;
let opts = { k: 5, storePrevious: false };

// TODO: draw hull paths with splines

function setup() {
  createCanvas(800, 800);
  noStroke();
  console.log((colors = random(palettes)));
  fracture = new Fracture(createPointsCircle(2000), opts);
}

function mouseReleased() {
  fracture.step();
  draw();
}

function draw() {
  background(255);
  fracture.clusters.forEach((c, i) => {
    noStroke();
    fill(colors[i % colors.length]);
    beginShape();
    c.path.forEach((h) => vertex(h.x, h.y));
    endShape(CLOSE);
    //stroke(100) && c.data.forEach((h) => point(h[0], h[1]));
  });
  noLoop();
}

function createPoints(num = 100, min=0, max=Math.min(width,height)) {
  let data = [];
  while (data.length < num) data.push([random(width), random(height)]);
  return data;
}

function createPointsCircle(num = 100, radius = width / 2) {
  let data = [];
  while (data.length < num) {
    let pt = [random(width), random(height)];
    let d = dist(pt[0], pt[1], width / 2, height / 2);
    if (d < radius) data.push(pt);
  }
  return data;
}

