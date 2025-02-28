let img, rectW, rectH;

function preload() {
  img = loadImage("gu.jpg"); // 32 x 32
}

function setup() {
  createCanvas(400, 400); 
  noStroke();
  
  img.loadPixels();
  
  rectW = width / img.width;
  rectH = height / img.height;
}

function draw() {
  background(0);
  
  for (let i = 0; i < img.width; i++) {
    for (let j = 0; j < img.height; j++) {
      
      // get index into 1D pixel array
      let idx = (i + j * img.width) * 4;
      
      // grab the colors
      let r = img.pixels[idx + 0];
      let g = img.pixels[idx + 1];
      let b = img.pixels[idx + 2];
      //let a = img.pixels[idx + 3];
      
      // hack for brightness
      let avg = (r + g + b) / 3;
      
      fill(avg);
      rect(i * rectW, j * rectH, rectW);
    }
  }
}