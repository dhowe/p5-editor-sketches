class Vehicle {
  constructor(x, y, l, h, speed) {
    this.pos = createVector(x, y);
    this.l = l;
    this.h = h;
    this.speed = speed;
    this.force = createVector(0, 0);
    this.maxSpeed = 2;
    this.acc = createVector(0, 0);
    this.col = colors[floor(random(5))];
    this.health = 3;
    this.maxsz = random(1,4);
  }

  calDist() {
    this.force = this.applyForce(light, 500);
    let resis = this.applyForce(poison, 100).mult(-0.1);
    this.force.add(resis);
  }

  applyForce(arr, perception) {
    let f = createVector(0, 0);
    let closest = Infinity;
    for (let i = 0; i < arr.length; i++) {
      let d = dist(arr[i].pos.x, arr[i].pos.y, this.pos.x, this.pos.y);
      if (d < closest) {
        closest = d;
        f = p5.Vector.sub(arr[i].pos, this.pos);
      }
    }

    if (closest <= perception) {
      return f;
    } else {
      return createVector(0, 0);
    }
  }

  eat(arr, addHealth) {
    var record = Infinity;
    var closest = -1;

    for (var i = arr.length-1; i >= 0; i--) {
      let d = dist(this.pos.x, this.pos.y, arr[i].pos.x, arr[i].pos.y);
      if (d <= record) {
        record = d;
        closest = i;
      }
    }
    if (record <= 10) {
      arr.splice(closest, 1);

      if (addHealth) {
        this.health += 0.1;
        this.col = colors[floor(random(5))];
      } else {
        this.health -= 0.3;
      }
      this.health = constrain(this.health, 0, 1);
    }
  }

  update() {
    this.health -= 0.005;
    this.calDist();
    this.force.normalize();

    this.speed.add(this.force.mult(0.15));
    this.speed.limit(this.maxSpeed);
    this.pos.add(this.speed);
  }

  render() {
    noStroke();
    fill(this.col);
    push();
    translate(this.pos.x, this.pos.y);
   this.sz = map(this.health, 0, 1, 0, this.maxsz);
    ellipse(0,0,this.sz/3,this.sz/3);
    // rotate(this.speed.heading() + PI / 2);
    // stroke(this.col);
    // line(0, 0, 0, this.health * 30);
    pop();
  }
}
