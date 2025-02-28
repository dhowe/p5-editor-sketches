let integratorX;

function setup() {
  createCanvas(500, 100);
  integratorX = new Integrator();
}

function draw() {
  background(204);
  integratorX.update();
  fill(0);
  //  console.log(integratorX.value);
  ellipse(integratorX.value, height / 2, 20, 20);
}

function mousePressed() {
  integratorX.target(mouseX);
}

class Integrator {
  constructor(value = 100, damping = 0.5, attraction = 0.2) {
    this.force = 0;
    this.vel = 0;
    this.accel = 0;
    this.mass = 1;
    this.value = value;
    this.damping = damping;
    this.attraction = attraction;
  }

  setValue(v) {
    this.value = v;
  }

  update() {
    if (this.targeting) {
      this.force += this.attraction * (this.theTarget - this.value);
    }

    this.accel = this.force / this.mass;
    this.vel = (this.vel + this.accel) * this.damping;
    this.value += this.vel;

    this.force = 0;
  }

  target(t) {
    this.targeting = true;
    this.theTarget = t;
  }

  noTarget() {
    this.targeting = false;
  }
}
