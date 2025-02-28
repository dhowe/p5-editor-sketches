let img,
  circles = [];

function preload() {
  img = loadImage("cloud.png");
}

function setup() {
  createCanvas(400, 400);
  background(0);
  //image(img, 50, 50, 300, 300);
  fill(255);
}

function draw() {
  fill(255);
  stroke(0);
  //circles.forEach((c) => circle(c[0], c[1], c[2] * 2));

  for (let j = 0; j < 10; j++) {
    let x = random(width);
    let y = random(width);
    let rad = random(1, 15);
    let circleSteps = 24;
    let intersects = false;
    fill('red');
    circle(x,y,rad);
    for (let i = 0; i < circleSteps; i++) {
      let angle = map(i, 0, circleSteps, 0, TWO_PI);
      let px = int(x + rad * cos(angle));
      let py = int(y + rad * sin(angle));
      circle(px,py,1);
      let r = red(get(px, py));
      if (r > 200) intersects = true;
    }
    if (!intersects) circles.push([x, y, rad]);
    
    break;
  }
}
