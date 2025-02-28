function setup() {
  createCanvas(500, 200);
  background(255);
  for (let j = 0; j < 5; j++) {
    for (let i = 0; i < 10; i++) {
      fill(0);
      if ((i+j) % 2 == 1) {
        fill(200);
      }
      circle(50+j*100, 100, (10 - i) * 10);
    }
  }
}
