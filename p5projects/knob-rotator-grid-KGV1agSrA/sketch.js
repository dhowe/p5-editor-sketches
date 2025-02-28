let rseed;

function setup() {
  createCanvas(520, 520);
  rseed = random(99999);
}

function draw() {
  background(245,32);
  randomSeed(rseed);
  noFill();

  let sz = 40;
  for (let j = 0; j < 13; j++) {
    for (let i = 0; i < 13; i++) {
      push();
      // translate to grid position
      translate(i * 40 + 20, j * 40 + 20);
      circle(0, 0, 40);
      let dx = random(-1, 1);
      let dy = random(-1, 1);
      let x1 = 0,y1 = 0, x2 = 0, y2 = 0;

      let len = dist(x1, y1, x2, y2);
      let target = 40;
      while (len < target) {
        x1 -= dx;
        y1 -= dy;
        x2 += dx;
        y2 += dy;
        len = dist(x1, y1, x2, y2);
      }
      let spd = random(0.05,.08);
      if (random() < .5) spd *= -1;
      rotate(random()+frameCount*spd);
      line(x1, y1,x2, y2);
      pop();
    }
  }
}
