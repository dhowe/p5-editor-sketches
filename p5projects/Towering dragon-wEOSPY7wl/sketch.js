function setup() {
  createCanvas(500, 400);
  background(0);
  noFill();
  stroke(255);

  rectMode(CENTER);

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 8; j++) {
      let count = i*8+j;
      fill('red');
      if (count%3==2) fill('green');
      if (count%3==1) fill('blue');
      sqircle(75+j*50, 75+i*50,50);
    }
  }
}

function sqircle(x, y, sz) {
  square(x, y, sz);
  circle(x, y, sz);
  square(x, y, (sz * sqrt(2)) / 2);
}
