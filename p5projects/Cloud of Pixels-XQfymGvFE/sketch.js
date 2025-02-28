let x = [], y = [], step = 10, img, pix;

// move the mouse around the canvas

function preload() {
  img = loadImage("daniel.jpg");
}

function setup() {
  createCanvas(512, 512);
  rectMode(CENTER);
  frameRate(10);
  noStroke();
  
  img.loadPixels(); // get pixels for image
  
  // create 10000 particles
  for (let i = 0; i < 10000; i++) {
    x[i] = width / 2 + random(-100, 100);
    y[i] = height / 2 + random(-100, 100);
  }
}

function draw() {
  background(255);

  // map mouse to particle alpha/size
  let alpha = map(mouseX, 0, width, 5, 200);
  let psize = map(mouseY, 0, width, 0.1, 2);

  // loop over each particle
  for (let i = 0; i < x.length; i++) {

    // movement via random walk 
    x[i] += random(-step, step);
    y[i] += random(-step, step);

    // keep particles on the screen
    if (x[i] < 0 || x[i] > width) x[i] = width / 2;
    if (y[i] < 0 || y[i] > width) y[i] = width / 2;

    // set particle color from image
    let idx = floor(y[i] / 4) * width / 4 + floor(x[i] / 4);
    fill(img.pixels[idx*4] * 0.8, alpha);

    // adjust size: smaller near center
    let d = dist(x[i], y[i], width / 2, height / 2);
    let sz = map(d, 5, 400, 7, 150); 

    rect(x[i], y[i], sz * psize, sz * psize, 2); 
  }
}