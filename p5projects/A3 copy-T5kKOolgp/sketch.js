let maxDepth = 5; 
let colorPalette;

function setup() {
  createCanvas(800, 800);
  noLoop();
  colorPalette = [
    color(240, 100, 50), color(50, 150, 240), 
    color(200, 80, 180), color(255, 200, 50),
    color(60, 220, 130), color(230, 60, 90)
  ];
}

function draw() {
  background(10);
  let points = [
    { x: 100, y: 100 },
    { x: width - 100, y: 100 },
    { x: width / 2, y: height - 100 }
  ];
  recursiveTriangle(points, 0);
}

function recursiveTriangle(points, depth) {
  if (depth >= maxDepth) {
    let col = random(colorPalette);
    fill(col);
    stroke(255, 50);
    beginShape();
    for (let p of points) vertex(p.x, p.y);
    endShape(CLOSE);
    return;
  }

  let mid1 = weightedMidpoint(points[0], points[1]);
  let mid2 = weightedMidpoint(points[1], points[2]);
  let mid3 = weightedMidpoint(points[2], points[0]);

  let roll = random();
  
  if (roll < 0.3) {
    recursiveTriangle([points[0], mid1, mid3], depth + 1);
    recursiveTriangle([mid1, points[1], mid2], depth + 1);
    recursiveTriangle([mid3, mid2, points[2]], depth + 1);
  } else if (roll < 0.6) {
    recursiveTriangle([points[0], mid1, mid2], depth + 1);
    recursiveTriangle([mid3, points[1], mid2], depth + 1);
    recursiveTriangle([mid3, mid2, points[2]], depth + 1);
  } else {
    recursiveTriangle([points[0], mid1, mid3], depth + 1);
    recursiveTriangle([mid1, points[1], mid2], depth + 1);
    recursiveTriangle([mid2, mid3, points[2]], depth + 1);
    recursiveTriangle([mid1, mid2, mid3], depth + 1);
  }
}

function weightedMidpoint(p1, p2) {
  let weight = random(0.3, 0.7);
  return {
    x: lerp(p1.x, p2.x, weight) + random(-15, 15),
    y: lerp(p1.y, p2.y, weight) + random(-15, 15)
  };
}
