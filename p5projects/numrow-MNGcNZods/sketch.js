let imgs = [], ts = 0;

function preload() {
  for (let i = 0; i < 5; i++) {
    imgs.push(loadImage(i + 1 + ".jpg"));
  }
}

function setup() {
  createCanvas(500, 100);
}

function draw() {
  background(220);
  for (let j = 0; j < imgs.length; j++) {
    image(imgs[j], j * 100, 0, 100, 100);
  }
  if (millis() - ts > 1000) {
    imgs.push(imgs.shift());
    ts = millis();
  }
}
