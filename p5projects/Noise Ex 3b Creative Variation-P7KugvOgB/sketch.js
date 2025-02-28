// sketch: water variation with 20 lines

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(245, 8);
  for (let i = 0; i < 20; i++) {
    
    // map strokeWeight to i
    strokeWeight(map(i, 0, 19, 0.1, 2));
    
    // map color to i
    stroke(
      map(i, 0, 19, 0, 100), // red
      map(i, 0, 19, 100, 0), // green
      map(i, 0, 19, 200, 100),  // blue
      100); /// alpha
    
    // different noise for each i
    for (let x = 0; x < width; x++) {
      point(x, noise(i + x / 500, frameCount / 500) * height);
    }
  }
}