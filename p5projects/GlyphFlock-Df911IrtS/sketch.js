let flock;

function setup() {

  createCanvas(500,300);
  flock = new Flock();
  loadFont("avenir.otf", function(f) {

      let points = f.textToPoints('UAL-CCI', 20, 185, 120);
      for (let k = 0; k < points.length; k++) {
        flock.boids.push(new Boid(points[k]));
      }
  });
}

function draw() {

  background((flock.count / flock.boids.length) * 237, 34, 93);
  flock.run();
}

function mouseReleased() {

  if (flock.arrived()) flock.arrived(false);
}