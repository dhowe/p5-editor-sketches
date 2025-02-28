let furs = [];
let furCount = 7000;
let furAlpha = 10;
let strokeWidth = 0.3;
let noiseScale = 300;
let noiseStrength = 50;
let updateAlpha = 40;

function setup() {
  createCanvas(900, 250);
  for (let i = 0; i < furCount; i++) {
    furs[i] = new Fur();
  }
}

function draw() {
  fill(253,242,212, updateAlpha);
  noStroke();
  rect(0, 0, width, height);
  stroke(0, furAlpha);
  for (let i = 0; i < furCount; i++) {
    furs[i].change(noiseScale, noiseStrength, strokeWidth);
  }
}

class Fur {
  constructor() {
    this.strokeColor = random(height);
    this.vector = createVector(random(width), random(height));
    this.vector2 = this.vector.copy();
    this.increSize = random(1, 9);
  }
  change(noiseScale, noiseStrength, strokeWidth) {
    this.angle = noise(this.vector.x / noiseScale, this.vector.y / noiseScale) * 30;
    this.angle = (this.angle - floor(this.angle)) * noiseStrength;
    this.vector.x += cos(this.angle) * this.increSize;
    this.vector.y += sin(this.angle) * this.increSize;
    strokeWeight(strokeWidth * this.increSize);
    line(this.vector2.x, this.vector2.y,this.vector.x, this.vector.y);
    this.vector2 = this.vector.copy();
  }
}
