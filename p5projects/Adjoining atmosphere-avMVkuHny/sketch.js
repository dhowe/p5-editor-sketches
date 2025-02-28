let images = [], cellSz = 100;

function preload() {
  // loading 9 images named sequentially
  for (let i = 1; i < 10; i++) {
    let imageName = i + ".jpg";
    images.push(loadImage(imageName));
  }
}

function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(200);
  
  // mapping mouse to grid location
  let cellX = floor(map(mouseX, 0, width, 0, 3));
  let cellY = floor(map(mouseY, 0, height, 0, 3));
  
  let imgNum = 0;
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      
      rect(i * cellSz, j * cellSz, cellSz);
      
      // which cell is mouse over ?
      if (i == cellX && j == cellY) { 
        image(images[imgNum], i * cellSz, j * cellSz, cellSz, cellSz);
      }
      
      imgNum++;
    }
  }
}
