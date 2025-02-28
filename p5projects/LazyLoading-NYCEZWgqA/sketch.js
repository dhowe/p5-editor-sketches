let imgs = []; // empty array of imgs
let numRows = 3; // rows in grid
let numCols = 3; // cols in grid
let numImages = 9; // total number of images

function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(220);

  let idx = -1; // check the mouse
  if (mouseX > 0 && mouseY > 0) {
    let gx = floor(map(mouseX, 0, width, 0, numRows));
    let gy = floor(map(mouseY, 0, height, 0, numRows));
    
    // figure out the ID for the image (0-8)
    idx = min(gy * numRows + gx, 9);
  }

  // is the ID between 0-8 ?
  if (idx >= 0 && idx < numImages) {
    
    // is the image already loaded?
    if (typeof imgs[idx] === "undefined") {
      
      // if not, get its name
      let imgName = idx + 1 + ".jpg";
      
      // then load the image
      loadImage(imgName, (img) => {
        console.log("loaded: " + imgName);
        
        // when finished loading, put in array
        imgs[idx] = img;
      });
    }
  }

  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      rect(i * 100, j * 100, 100); // draw grid
      let idx = j * numRows + i;
      if (imgs[idx]) { // display image if loaded
        image(imgs[idx], i * 100, j * 100, 100, 100);
      }
    }
  }
}
