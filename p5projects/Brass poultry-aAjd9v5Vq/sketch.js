function setup() {
  createCanvas(1000, 400);
}

function draw() {
  background(245, 8);
  for (let i = 0; i < 20; i++) {
    strokeWeight(map(i, 0, 19, .1, 2));
    stroke(
      map(i, 0, 19, 0, 100),
      map(i, 0, 19, 100, 0),
      map(i, 0, 19, 200, 100), 
      100);
    for (let x = 0; x < width; x++) {
      point(x, noise(i + x / 500, frameCount / 500) * height);
    }
  }
}