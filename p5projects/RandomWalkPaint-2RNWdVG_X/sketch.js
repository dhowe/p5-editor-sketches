let x = [];
let y = [];
let a = [];
let g = [];
let spd = [];
let sz = [];
let count = 200;

function setup() {
  createCanvas(800, 400);
  background(0);
  rectMode(CENTER);
  noStroke();
  for (let i = 0; i < count; i++) {
    x[i] = random(width);
    y[i] = random(height);
    spd[i] = random(.1,.3);
    sz[i] = random(10, 40);
    a[i] = random(2, 5);
    g[i] = random(-100, 300);
  }
}

function draw() {

  for (let i = 0; i < x.length; i++) {
    fill(map(i, 0, count-1, -100, 300)/*g[i]*/, a[i]);
    x[i] = constrain(x[i] + random(-spd[i], spd[i]), 0, width);
    y[i] = constrain(y[i] + random(-spd[i], spd[i]), 0, height);
    sz[i] = constrain(sz[i] + random(-spd[i], spd[i]), 10, 40);
    circle(x[i], y[i], sz[i]);
  }

}