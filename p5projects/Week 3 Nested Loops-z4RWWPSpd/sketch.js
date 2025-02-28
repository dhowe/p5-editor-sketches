function setup() {
  createCanvas(300, 300);
  background(255);

  let p = 100, sz = 200;
  for (let i = 0; i < 10; i++) {
    noFill();
    stroke(0);
    square(p, p, sz);
    for (let j = 0; j < 10; j++) {
      noStroke();
      fill(map(j, 0, 9, 255, 0));
      circle(p + sz / 2, p + sz / 2, sz / j);
    }
    p -= sz / 4;
    sz /= 2;
  }
}
