class Particle2 {
  constructor(i, x, y, r, c) {
    this.pos = createVector(x, y);
    this.angle = map(this.i, 0, 100, 0, PI);
    this.r = r;
    this.c = c;
    this.r2 = this.r * this.r;

    let ran = floor(random(4));

    if (ran === 0) {
      this.angleV = -0.001;
    } else if (ran === 1) {
      this.angleV = -0.02;
    } else if (ran === 2) {
      this.angleV = -0.03;
    } else if (ran === 3) {
      this.angleV = -0.04;
    } else if (ran === 4) {
      this.angleV = -0.5;
    }

    this.angleA = -0.002;
  }

  show() {
    noFill();
    //noStroke();
    circle(this.pos.x, this.pos.y, this.r * 2);
    // translate(this.pos.x, this.pos.y);
    // rotate(this.angle);
  }

  update() {
    this.pos.x += cos(this.angle);
    this.pos.y += sin(this.angle);

    this.angle += this.angleV;
    this.angleV += this.angleA;

    let ran = floor(random(4));

    if (ran === 0) {
      this.angle -= 0.001;
    } else if (ran === 1) {
      this.angle -= 0.02;
    } else if (ran === 2) {
      this.angle -= 0.03;
    } else if (ran === 3) {
      this.angle -= 0.04;
    } else if (ran === 4) {
      this.angle -= 0.05;
    }
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
    this.c.setAlpha(random(150, 200));
    strokeWeight(1);
    line(paX, paY, pbX, pbY);
  }
}