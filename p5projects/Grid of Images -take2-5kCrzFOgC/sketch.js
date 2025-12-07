let sz = 100, imgs = [];

function preload() {
  imgs = loadImagesByNum(1, 9, ".jpg");
}

function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(220);

  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      square(i * sz, j * sz, sz);

      let gridX = floor(mouseX/width * 3)
      let gridY = floor(mouseY/height * 3);

      if (gridX == i && gridY == j) {
        image(imgs[i + j * 3], i * sz, j * sz, sz, sz);
      }
    }
  }
}
