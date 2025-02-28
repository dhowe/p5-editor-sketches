let walkers = [];
let pad = 50;

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < 1000; i++) {
    walkers.push(
      new Walker(
        random(pad, width - pad),
        random(pad, height - pad),
        random(30, 50)
      )
    );
  }
}

function draw() {
  background(255,4);
  stroke(100,20);
  walkers.forEach((w) => w.walk());
  filter(ERODE);
  filter(ERODE);
  filter(ERODE);
}

class Walker {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.sz = s;
  }
  walk() {
    this.x += random(-2, 2);
    this.y += random(-2, 2);

    // handle edge padding
    if (0) {
      if (this.x - this.sz / 2 < pad) this.x = pad + this.sz / 2;
      if (this.x + this.sz / 2 > width - pad)
        this.x = width - pad - this.sz / 2;
      if (this.y - this.sz / 2 < pad) this.y = pad + this.sz / 2;
      if (this.y + this.sz / 2 > width - pad)
        this.y = height - pad - this.sz / 2;
    }
    this.draw();
  }
  draw() {
    fill(0, 0, 120, this.sz / 8);
    circle(this.x, this.y, this.sz);
    if (0) {
      stroke(200, 0, 0, 40);
      line(
        this.x - this.sz / 2,
        this.y - this.sz / 2,
        this.x - this.sz / 2,
        this.y + this.sz / 2
      );
      line(
        this.x + this.sz / 2,
        this.y - this.sz / 2,
        this.x + this.sz / 2,
        this.y + this.sz / 2
      );
      noStroke();
    }
  }
}
