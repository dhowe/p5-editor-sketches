function setup() {
  createCanvas(500, 400);
  background(255);
  noFill();
  for (let j = 0; j < 6; j++) {
    for (let i = 0; i < 8; i++) {
      squarcle(25 + i * 50, 25 + j * 50, 50);
    }
  }
}


