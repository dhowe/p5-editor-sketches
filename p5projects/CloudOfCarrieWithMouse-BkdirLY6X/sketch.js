let x = [], y = [], data, step = 10;

function preload() {
  data = loadJSON("https://rednoise.org/imc/data/pixels.json");
}

function setup() {
  createCanvas(512, 512);
  rectMode(CENTER);
  noStroke();
  for (let i = 0; i < 10000; i++) {
    x[i] = width / 2;
    y[i] = height / 2;
  }
}

function draw() {
  background(255);
  
  // map mouse to parameters
  let alpha = map(max(mouseX,0), 0, width, 5, 200);
  let psize = map(max(mouseY,0), 0, width, 0.1, 2);

  for (let i = 0; i < x.length; i++) {

    x[i] = x[i] + random(-step, step);
    y[i] = y[i] + random(-step, step);

    if (x[i] < 0 || x[i] > width) x[i] = width / 2;
    if (y[i] < 0 || y[i] > width) y[i] = width / 2;

    let d = dist(x[i], y[i], width / 2, height / 2);
    let idx = floor(y[i] / 4) * width / 4 + floor(x[i] / 4);
    let sz = map(d, 5, 400, 7, 150);

    fill(data.pixels[idx] * 0.8, alpha);
    rect(x[i], y[i], sz * psize, sz * psize, 2);
  }
}