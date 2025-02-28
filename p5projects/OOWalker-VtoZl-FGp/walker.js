class Walker {
  
  constructor(xpos, ypos, stepSize) {
    this.x = this.lx = xpos;
    this.y = this.ly = ypos;
    this.step = stepSize;
  }

  update() {
    
    // choose a direction
    let flip = floor(random(0, 4));

    // move one step 
    if (flip === 0) { 
      this.x += this.step;
    } else if (flip === 1) {
      this.x -= this.step;
    } else if (flip === 2) {
      this.y += this.step;
    } else if (flip === 3) {
      this.y -= this.step;
    }

    // wraparound if we're off edge
    this.x = (this.x + width) % width;
    this.y = (this.y + height) % height;
  }

  render() {
    if (dist(this.x, this.y, this.lx, this.ly) <= 10) {
      line(this.x, this.y, this.lx, this.ly);
    }
    this.lx = this.x;
    this.ly = this.y;
  }
}
