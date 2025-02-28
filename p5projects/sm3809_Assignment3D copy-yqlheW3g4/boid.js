//use of vector.sub() & vector.add() from https://www.youtube.com/watch?v=mhjuuHl6qHM

class Boid {

  constructor(xPos, yPos, zPos) {
    this.position = createVector(xPos, yPos, zPos);
    this.velocity = createVector(random(-1, 1), random(-1, 1), random(-1, 1));
    this.acceleration = createVector(0, 0, 0);
    this.maxForce = 0.1;
    this.speed = 150;
    this.visibleArea = 500;
    this.brightness = random(100);
    this.timeGlowing = random(100, 500);
    this.time = 0;
    this.size = random(15, 30);
    this.glowOrDim = 1;
  }

  separation(boids) {
    let steering = createVector();
    let boidsInArea = 0;

    for (let other of boids) {
      let d = dist(this.position.x, this.position.y, this.position.z, other.position.x, other.position.y, other.position.z);

      if (other != this && d < this.visibleArea / 2) {
        let diff = p5.Vector.sub(this.position, other.position);
        diff.normalize();
        diff.div(d);
        steering.add(diff);
        boidsInArea++;
      }
    }

    if (boidsInArea > 0) {
      steering.div(boidsInArea);
      steering.setMag(this.speed);
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
    }
    return steering;
  }

  cohesion(boids) {
    let steering = createVector();
    let boidsInArea = 0;

    for (let other of boids) {
      let d = dist(this.position.x, this.position.y, this.position.z, other.position.x, other.position.y, other.position.z);

      if (other != this && d < this.visibleArea) {
        steering.add(other.position);
        boidsInArea++;
      }
    }

    if (boidsInArea > 0) {
      steering.div(boidsInArea);
      steering.sub(this.position);
      steering.setMag(this.speed);
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
    }
    return steering;
  }

  update(boids) {
    if (this.position.x > 400 ) {
      this.position.x = 400;
      this.velocity.x = -this.velocity.x;
    }else if(this.position.x < -400){
      this.position.x = -400;
      this.velocity.x = -this.velocity.x;
    }
    if (this.position.y > 400 ) {
      this.position.y = 400;
      this.velocity.y = -this.velocity.y;
    }else if(this.position.y < -400){
      this.position.y = -400;
      this.velocity.y = -this.velocity.y;
    }
    
    if (this.position.z > 400 ) {
      this.position.z = 400;
      this.velocity.z = -this.velocity.x;
    }else if(this.position.z < -400){
      this.position.z = -400;
      this.velocity.z = -this.velocity.x;
    }
    this.acceleration.add(this.cohesion(boids));
    this.acceleration.add(this.separation(boids));

    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.acceleration.set(0, 0, 0);
  }

  render() {
    // stroke(255);
    //normalMaterial();

    push();
    if (frameCount > this.time + this.timeGlowing) {
      this.timeGlowing = random(100, 500);
      this.time = frameCount;
      
      if (this.glowOrDim == 0) {
        this.glowOrDim = 1;
      } else {
        this.glowOrDim = 0;
      }
      
    } else {
      if (this.glowOrDim == 0) {
        this.brightness -= 230 / this.timeGlowing;
      } else {
        this.brightness += 230 / this.timeGlowing;
      }
    }
    emissiveMaterial(200, 215, 0, this.brightness);
    translate(this.position.x, this.position.y, this.position.z);
    box(this.size);
    pop();
  }
}