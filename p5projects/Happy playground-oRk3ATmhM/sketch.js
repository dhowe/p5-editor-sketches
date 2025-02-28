let images = []; // 4 images
let visibleImages = new Array(4);

function preload() {
  for (let j = 0; j < 2; j++) {
    let img = loadImage((j + 1) + ".jpg");
    images.push(img);
    images.push(img);
  }
}

function setup() {
  createCanvas(400, 400);
  visibleImages.fill(false);
  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < 2; i++) {
      square(i * 200, j * 200, 200);
    }
  }
  console.log(images);

}
