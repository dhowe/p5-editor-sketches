class Walker {
  
  constructor(xpos, ypos, stepSize) {
    this.x = this.lx = xpos;
    this.y = this.ly = ypos;
  }

  update() {
    
    // choose a direction
    let flip = floor(random(4));
    let step = randomGaussian(3, 5);

    // move one step 
    if (flip === 0) { 
      this.x += step;
    } else if (flip === 1) {
      this.x -= step;
    } else if (flip === 2) {
      this.y += step;
    } else if (flip === 3) {
      this.y -= step;
    }

    // wraparound if we're off edge
    this.x = (this.x + width) % width;
    this.y = (this.y + height) % height;
  }

  render() {
    if (dist(this.x, this.y, this.lx, this.ly) <=  width/2) {
      line(this.x, this.y, this.lx, this.ly);
    }
    this.lx = this.x;
    this.ly = this.y;
  }
}
