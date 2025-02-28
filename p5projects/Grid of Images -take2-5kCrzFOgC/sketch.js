let imgs = [];
let sz = 100;

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
      let sqX = i * sz;
      let sqY = j * sz;

      square(sqX, sqY, sz);

      let gridX = floor(map(mouseX, 0, width, 0, 3));
      let gridY = floor(map(mouseY, 0, height, 0, 3));

      if (gridX == i && gridY == j) {
        image(imgs[i + j * 3], sqX, sqY, sz, sz);
      }
    }
  }
}
