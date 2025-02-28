let x = [], y = [], tx = [], ty = [];

function setup() {
  createCanvas(512, 512);
  textSize(32);
  for (let i = 0; i < 100; i++) {
    x[i] = 25;
    y[i] = 256;
    tx[i] = 500;
    ty[i] = 256;
  }
}

function draw() {
  background(245);

  for (let i = 0; i < x.length; i++) {
    circle(x[i], y[i], 10);

    x[i] = lerp(x[i], tx[i], 0.05);
    y[i] = lerp(y[i], ty[i], 0.05);

    let d = dist(x[i], y[i], tx[i], ty[i]);
    if (d < 10) {
      tx[i] = random(width);
      ty[i] = random(height);
    }
  }
}
