function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255);

  for (let x = 0; x < width; x++) {
    //stroke(100,150,200);
    line(x, noise(x/700) * height , x, height);
  }
}