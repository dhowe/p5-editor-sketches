let img = [];

function preload() {
  for (let i = 1; i <= 9; i++) {
	img[i] = loadImage(i+'.jpg');		
  }
}
function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(220);

  let cellX = floor(mouseX/100);
  let cellY = floor(mouseY/100);
  let index = 0;
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      image(img[index], i*100, j* 100);
      index++;
    }
  }
}
