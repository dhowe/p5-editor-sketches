class Walker {
  
  constructor(x, y, theta) {
    this.dia = 6;
    this.pos = createVector(x, y);
    this.theta = theta || random(0, TWO_PI);
    this.path = [this.pos];
    walkers.push(this);
  }

  update() {
    this.theta += random(-this.dia / 20, this.dia / 20);
    let x = this.dia * sin(this.theta);
    let y = this.dia * cos(this.theta);
    this.pos.add(createVector(x, y));
    let d = dist(width / 2, height / 2, this.pos.x, this.pos.y);
    if (d > maxDist) {
      return false;
    }
    // // WORKING HERE
    // let hit = paths().find((p,i) => {
    //   let dp = p.dist(this.pos);
    //   console.log(round(p.x)+','+round(p.y), dp, this.dia/2);
    //   return dp < this.dia/2;
    // });
    // if (hit) {
    //   console.log('hit', hit.x,hit.y);
    //   return false;
    // }
    this.path.push(this.pos.copy());
    return true;
  }

  render() {
    fill(0);
    noStroke();
    circle(this.pos.x, this.pos.y, this.dia);
  }
  
  destroy() {
    this.pos = undefined;
    this.path = undefined;
  }
}
