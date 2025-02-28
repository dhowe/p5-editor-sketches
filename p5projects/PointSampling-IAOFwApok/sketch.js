let img;


function preload() {
  img = loadImage('flower.jpg');
}

function setup() {
  createCanvas(512, 512);
  //image(img, 0, 0);
  img.loadPixels();
  noStroke();
}


function draw() {
  background(255);
  let size = floor(map(mouseX, 0, width, 2, 40, true));

  for (let x = 0; x < width; x += size) {
    for (let y = 0; y < height; y += size) {     

      let index = (x + y * width) * 4;

      // point-sampling
      let r = img.pixels[index];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2]
    
      let bright = brightness(color(r,g,b));
      let sz = map(bright, 0, 255, size, 0);
      fill(0);
      circle(x, y, sz);
    }
  }
  //noLoop();
}

