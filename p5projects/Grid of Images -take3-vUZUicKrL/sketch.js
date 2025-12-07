let sz = 100, imgs = [];

function preload() {
  imgs = loadImagesByNum(1, 9, ".jpg");
}

function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(220);

  for (let i = 0; i < 9; i++) {
    
    let x = (i % 3) * sz;
    let y = floor(i / 3) * sz;
    square(x, y, sz);

    let gx = floor((mouseX / width) * 3);
    let gy = floor((mouseY / height) * 3);
    let idx = (gy * 3) + gx;

    if (i === idx)
    image(imgs[i], x, y, sz, sz);
  }
}
