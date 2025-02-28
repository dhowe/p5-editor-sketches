class Particle1 {
  constructor(i, x, y, r, c) {
    this.pos = createVector(x, y);
    this.i = i;
    this.angle = map(this.i, 0, 100, 0, TWO_PI * 2);
    this.angleV = randomGaussian(0.01, 0.02);
    this.r = r;
    this.c = c;
    this.r2 = this.r * this.r;
  }

  show() {
    noFill();
    //noStroke();
    circle(this.pos.x, this.pos.y, this.r * 2);
  }

  update() {
    this.pos.x += cos(this.angle);
    this.pos.y += sin(this.angle);

    let setoff = 10;
    this.angleA = map(noise(setoff), 0, 1, 0.001, 0.01);
    setoff += 0.01;

    this.angle += this.angleV;
    this.angleV += this.angleA;
  }

  //   update2() {
  //     this.pos.x += random(-5,5);
  //     this.pos.y += random(-5,5);
  //   }

  intersect(other) {
    let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);

    if (d > this.r + other.r || d < abs(this.r - other.r)) {
      return;
    }

    let a = (this.r2 - other.r2 + d * d) / (2 * d);
    let h = sqrt(this.r2 - a * a);
    let x2 = this.pos.x + (a * (other.pos.x - this.pos.x)) / d;
    let y2 = this.pos.y + (a * (other.pos.y - this.pos.y)) / d;

    let paX = x2 + (h * (other.pos.y - this.pos.y)) / d;
    let paY = y2 - (h * (other.pos.x - this.pos.x)) / d;
    let pbX = x2 - (h * (other.pos.y - this.pos.y)) / d;
    let pbY = y2 + (h * (other.pos.x - this.pos.x)) / d;

    stroke(this.c);
    noFill();
    this.c.setAlpha(random(100, 200));
    strokeWeight(1);
    line(paX, paY, pbX, pbY);
  }

  edges() {
    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    }
    if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }
    if (this.pos.y > height + this.r) {
      this.pos.y = -this.r;
    }
    if (this.pos.y < -this.r) {
      this.pos.y = height + this.r;
    }
  }
}

//   intersect2(other) {
//     noFill();
//     this.c.setAlpha(random(2, 8));
//     stroke(this.c);
//     //ellipse(this.pos.x, this.pos.y, 1, 1);

//     if(dist(this.pos.x,this.pos.y,other.pos.x,other.pos.y) < random(10,40)){
//       line(this.pos.x,this.pos.y,other.pos.x,other.pos.y);
//     }
//   }
// }