let numParticles = 50;

function setup() {
  createCanvas(720, 800);
  system = new ParticleSystem(numParticles);
  textAlign(CENTER);
}

function draw() {
  background(51);
  system.run();
}

// A simple Particle class
class Particle {

  constructor() {
    
    // random word, size, color, and flip-speed
    this.text = RiTa.randomWord();
    this.size = random(12,24);
    this.color = color(random(256), random(256), random(256));
    this.flipSpeed = random(1, 20);
    
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(random(-.5, .5), random(-3, -6));
    this.position = createVector(random(width), random(height, 2*height) );
  }
  
  run() {
    this.update();
    this.display();
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.position.x = this.position.x % width;
    if (this.position.y < 0) this.position.y += height;
    
    // choose a random time, based on flip-speed, to change words
    if (random(100) < this.flipSpeed) this.text = RiTa.randomWord();
  }

  display() {
    noStroke();
    fill(this.color);
    textSize(this.size);
    text(this.text, this.position.x, this.position.y);
  }  
}

class ParticleSystem {

  constructor(num) {
    this.particles = [];
    for (let i = 0; i < num; i++) {
      this.particles[i] = new Particle();
    }
  }

  run() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].run();
    }
  }
}