class Walker {
  
  constructor(xpos, ypos, stepSz, c) {
    this.x = xpos;
    this.y = ypos;
    this.lx = xpos;
    this.ly = ypos;
    this.stepSz = stepSz;
    this.c = c;
  }
  
  step() {
    
    let flip = floor(random(0, 4));
    
    if (flip === 0) {
      this.x += this.stepSz;
    } else if (flip === 1) {
      this.x -= this.stepSz;
    } else if (flip === 2) {
      this.y += this.stepSz;
    } else if (flip === 3) {
      this.y -= this.stepSz;
    }

    // wraparound if we're off edge
    this.x = (this.x + width) % width;
    this.y = (this.y + height) % height;
  }
  
  render() {
    noStroke();
    fill(this.c,16);
    rect(this.x, this.y, this.stepSz);
    if (dist(this.x, this.y, this.lx, this.ly) <= 10) {
      stroke(this.c,64);
      line(this.x, this.y, this.lx, this.ly);
    }
    this.lx = this.x;
    this.ly = this.y;
  }
}
