let imgs = [];

function preload() {
  for (let i = 1; i <= 9; i++) {
    let img = loadImage(i + ".jpg");
    imgs.push(img);
  }
}

function setup() {
  createCanvas(300, 300);
  background(245);
  let idx = 0;
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      let x = i * 100;
      let y = j * 100;
      rect(x, y, 100);
      image(imgs[idx], x, y, 100, 100);
      idx++;
    }
  }

}