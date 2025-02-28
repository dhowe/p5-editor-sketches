class Walker {
  
  constructor(xPos, yPos, xSpeed, ySpeed) {
    this.x = this.lx = xPos;
    this.y = this.ly = yPos;
    this.vx = xSpeed || 0;
    this.vy = ySpeed || 0;
    this.step = 0.5;
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
    this.x = (this.vx + this.x + width) % width;
    this.y = (this.vy + this.y + height) % height;
  }

  render() {
    if (dist(this.x, this.y, this.lx, this.ly) <= 10) {
      line(this.x, this.y, this.lx, this.ly);
    }
    this.lx = this.x;
    this.ly = this.y;
  }
}
