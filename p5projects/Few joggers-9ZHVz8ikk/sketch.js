let imgs = [], gridSz = 3;

function preload() {
  for (let i = 1; i <= 9; i++) {
    let img = loadImage(i + ".jpg");
    imgs.push(img);
  }
}

function setup() {
  createCanvas(300, 350);
}

function draw() {

  background(245);

  let sz = width / gridSz;
  let mx = map(mouseX, 0, width, 0, gridSz);
  let my = map(mouseY, 0, height, 0, gridSz);

  for (let j = 0; j < gridSz; j++) {
    for (let i = 0; i < gridSz; i++) {
      let x = i * sz;
      let y = j * sz;
      square(x, y, sz);
      if (i == mx && j == my) {
        image(imgs[j*gridSz+i], x, y, sz, sz);
      }
    }
  }
  
  textSize(24);
  text(mx, 30, 320);
}