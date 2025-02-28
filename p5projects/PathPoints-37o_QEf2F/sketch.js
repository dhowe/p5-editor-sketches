let flock;

function setup() {
  createCanvas(500, 300);

  flock = new Flock();

  loadFont('AvenirNextLTPro-Demi.otf', function(f) {
    let points = f.textToPoints('sm6327', 20, 185, 120);
    for (let k = 0; k < points.length; k++) {
      flock.boids.push(new Boid(points[k]));
    }
  });
}

function draw() {
  let c = flock.count / flock.boids.length;
  background(c * 137, c * 85, c * 100);
  flock.run();
}

function mouseReleased() {
  if (flock.arrived()) flock.arrived(false);
}
