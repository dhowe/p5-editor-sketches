let x = [], y = [], a = [];
let spd = [], sz = [], count = 200;

function setup() {
  createCanvas(800, 450);
  background(0);
  rectMode(CENTER);
  noStroke();
  for (let i = 0; i < count; i++) {
    x[i] = random(width);
    y[i] = random(height);
    spd[i] = random(.1,.3);
    sz[i] = random(10, 40);
    a[i] = random(2, 5);
  }
}

function draw() {

  for (let i = 0; i < x.length; i++) {
    fill(map(i, 0, count-1, -100, 300), a[i]);
    x[i] = constrain(x[i] + random(-spd[i], spd[i]), 0, width);
    y[i] = constrain(y[i] + random(-spd[i], spd[i]), 0, height);
    sz[i] = constrain(sz[i] + random(-spd[i], spd[i]), 10, 40);
    circle(x[i], y[i], sz[i]);
  }

}