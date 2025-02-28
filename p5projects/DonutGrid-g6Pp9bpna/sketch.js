function setup() {
  createCanvas(500, 500);
  background(220);

  let sz = 80;
  for (let j = 0; j < 10; j++) {
    for (let i = 0; i < 10; i++) {
      donut(i*sz/1.5, j*sz/1.5, sz*.93, 7);
    }
  }
}


function donut(x, y, size, rings) {
  noFill();
  for (let i = rings / 2; i >= 0; i--) {
    stroke(map(i, rings / 2, 0, 50, 200));
    strokeWeight(i * size / 12);
    ellipse(x, y, size);
  }

}