class Estate {
  
  static create(data) {
    let estates = [];
    data.forEach(pt => {
      let x = map(pt.lat, -90, 90, -1, 1);
      let y = map(pt.long, -180, 180, -1, 1);
      let label = pt.cases > 0 ? 0 : 1;
      estates.push(new Estate(x, y, label));
    });
    return estates;
  }
  
  constructor(x, y, l) {
    this.x = x;
    this.y = y;
    this.label = l; // 1 or -1
  }
  
  toVec() {
    return [this.x, this.y, 1];
  }
  
  draw() {
    fill(200, 0, 0);
    if (this.label > 0) fill(0, 200, 0);
    square(scrX(this.x), scrY(this.y), 5);
  }
}

function scrX(x) {
  return map(x, -1,1, 0, width);
}

function scrY(y) {
  return map(y, -1,1, 0, height);
}
