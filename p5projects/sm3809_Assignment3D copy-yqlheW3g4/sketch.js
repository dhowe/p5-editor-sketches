let boids = [];
let turningAngleX = 0;

function setup() {
  createCanvas(500, 500, WEBGL);
  
  for (let i = 0; i < 35; i++) {
    boids.push(new Boid(random(-400, 400), random(-400, 400), random(-400, 400)));
  }
}

function draw() {

  background(0);


  camera(sin(turningAngleX) * 2000, 0, cos(turningAngleX) * 2000, 0, 0, 0, 0, 1, 0);
  
  pointLight(255, 255, 255, sin(turningAngleX) * -500, 100,cos(turningAngleX) * -500);
  
  push();
  translate(sin(turningAngleX) * -6000, 0, cos(turningAngleX) * -6000);
  fill(255);
  ambientMaterial(0, 0, 120);
  sphere(5000);
  noStroke();
  pop();
  
  stroke(175, 175, 200);
  strokeWeight(5);
  noFill();
  emissiveMaterial(255);
  box(1000, 1000, 1000);

  for (let i = 0; i < boids.length; i++) {
    boids[i].update(boids);
    boids[i].render();
  }
}