let img;
let points = [];

function preload() {
  img = loadImage("jakeg.png");
}

function setup() {
  createCanvas(410, 380);
  img.loadPixels();
  //image(img,0,0);
  points = randomPoints(1000);
  // for (let i = 0; i < 5000; i++) {
  //   let x = floor(random(width));
  //   let y = floor(random(height));
  //   let b = brightness(img.get(x, y));
  //   if (random(50) > b) {
  //     //points.push(random(width), random(height));
  //     points.push(x, y);
  //     if (points.length >= 1000) break;
  //   }
  // }
  // print("found " + points.length);
}
function randomPoints(count) {
  let pts = [];
  for (let i = 0; i < count * 10; i++) {
    let x = floor(random(width));
    let y = floor(random(height));
    if (brightness(img.get(x, y)) < 50) {
      //console.log('found', x, y, brightness(img.get(x, y)));
      pts.push(x, y);
      if (pts.length >= count * 2) break;
    }
  }
  return pts;
}
function draw() {
  //background(245);
  stroke("red");

  let { polygons, centroids } = voronoiPolys(points);
  stroke(0);
  polygons.forEach((poly,i) => {
    let c = img.get(centroids[i*2], centroids[i*2+1]);
    // fill(...c.slice(0,3));
    // stroke(0, 50-brightness(c));
    beginShape();
    poly.points.forEach((p) => vertex(p[0], p[1]));
    endShape(CLOSE);
  });
  
  for (let i = 0; i < centroids.length; i += 2) {
    points[i] = lerp(points[i], centroids[i], .1);// + random(-1, 1);
    points[i + 1] = lerp(points[i + 1], centroids[i + 1], .1);// + random(-1, 1);
    point(points[i], points[i + 1]);
  }
  
  //noLoop();
}
