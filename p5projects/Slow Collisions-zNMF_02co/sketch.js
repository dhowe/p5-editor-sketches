let particles = [], highlightCollisions = 1;

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 1000; i++) {
    particles.push({
      x: random(width),
      y: random(height),
      colliding: false,
      radius: 4,
    });
  }
}

function draw() {
  background(0);
  noStroke();
  for (let p of particles) {

    fill(p.colliding ? 255:100);
    circle(p.x, p.y, p.radius * 2);
    
    p.x += random(-1, 1);
    p.y += random(-1, 1);
    p.colliding = false;
  }

  if (highlightCollisions) {
    for (let j = 0; j < particles.length; j++) {
      let p = particles[j];
      for (let i = 0; i < particles.length; i++) {
        if (i === j) continue;
        if (circlesIntersect(p, particles[i])) {
          p.colliding = true;
          break;
        }
      }
    }
  }
  
  fill(255);
  text(round(frameRate()),20,40); // fr
}

function circlesIntersect(a, b) {
  return dist(a.x, a.y, b.x, b.y) < (a.radius + b.radius);
}
