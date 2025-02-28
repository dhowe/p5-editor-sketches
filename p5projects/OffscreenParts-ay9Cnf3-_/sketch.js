//I moved the whole Particle class into a new sketch which is particle.js

let particles = [];
let pg;
let rocket;
let moun;
let forest;
let moon;
let fire;
let lifespan = 255;
let moonY = 0;

function preload() {
  rocket = loadImage("rocket.png");
  forest = loadImage("forest.png");
  moon = loadImage("moon.png");
  fire = loadImage("fire.png")
}

function setup() {
  createCanvas(400, 400);
  pg = createGraphics(400, 400);
  imageMode(CENTER);
}

function draw() {

  for (let i = 0; i < 5; i++) {
    let p = new Particle();
    particles.push(p);
  }

  pg.clear();
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].show();
    particles[i].update();
    if (particles[i].delete()) {
      //remove the particles
      particles.splice(i, 1)
    }
  }
  background(5, 2, 15);
  if (moonY < height/2) moonY += .5;
  image(moon, width / 2, moonY, 250, 250);
  image(forest, width / 2, height - 80, 400, 290);

  image(pg, width / 2, height / 2);
  image(rocket, mouseX, mouseY, 60, 100);
}

class Particle {

  constructor() {
    this.x = mouseX -5;
    this.y = mouseY + 36;
    this.vx = random(-1, 1) * 1.08;
    this.vy = random(1, 10) * 1.08;
    this.alpha = 255;
  }

  delete() {
    return this.alpha < 0;
  }

  show() {
    pg.blendMode(ADD);
    pg.noStroke();
    pg.fill(255, 100, 0, this.alpha);
    //pg.circle(this.x, this.y, 12); 
    pg.image(fire, this.x, this.y, 10, 10);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 4;
    lifespan -= 0.5;
  }
}