function setup() {
  createCanvas(400, 400);
  background(240);
  for (let y = 1; y < 20; y++) {
    for (let x = 0; x < y; x++) {
      circle(10 + x * 20, 10 + y * 20, 20);
    }
  }
}
