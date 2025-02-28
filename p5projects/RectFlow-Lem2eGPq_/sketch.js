function setup() {

  createCanvas(500, 500);
  noFill();

}

function draw() {
  let f = frameCount;
  let c = sin(f / 100) * 255;
  background(c, sin(f / 80)*20+32);
  stroke(255-c, sin(f / 90)*20+32);
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      push();
      translate(width / 2 + j * sin(f / 98) * 50 + 50,
        height / 2 + i * sin(f / 99) * 50 + 50);
      rotate(PI * (i * i + j * j + f) / 100);
      square(0, 0, sin(f / 1000) * width);
      pop();
    }
  }
}