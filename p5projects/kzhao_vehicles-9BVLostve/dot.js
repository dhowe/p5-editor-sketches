class Dot {
  constructor(healthy) {
    // x=constrain(x,150,width-150);
    // y=constrain(y,150,height-150);
    this.pos = createVector(random(50, width - 50), random(50, height - 50));
    this.healthy = healthy;
    if (healthy) {
      this.c = colors[2];
    } else {
      this.c = colors[3];
    }
    this.sz = random(1, 5);
  }

  render() {
    fill(this.c);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.sz, this.sz);
  }
}
