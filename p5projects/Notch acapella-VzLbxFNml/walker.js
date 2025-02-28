class Walker {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.r = random(20, 40);
    this.vx = random(-0.25, 0.25);
    this.vy = random(-0.25, 0.25);
  }
  render() {
    this.x += this.vx + random(-0.5, 0.5);
    this.y += this.vy + random(-0.5, 0.5);
    
     // wraparound if we're off edge
    this.x = (this.x + width) % width;
    this.y = (this.y + height) % height;
    
    noFill();
    circle(this.x, this.y, this.r * 2);
  }
}