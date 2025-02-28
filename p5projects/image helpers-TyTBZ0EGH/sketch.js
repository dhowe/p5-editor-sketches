let img;

function preload() {
  img = loadImage("dhimage.jpg");
}

function setup() {
  createCanvas(540, 540);
  img.resize(width, height);
  
  img.loadPixels();
  background(0);
  let pix = pixelsForSection(img, 8);
  pix.forEach(({pos,col}) => {
    stroke(col);
    square(pos.x, pos.y, brightness(col) / 255 * 10);
  });
}

// returns pixel objects for a rectangular section of image 
// with position(pos) and color(col) properties
function pixelsForSection(img, step = 4, x = 0, y = 0, w = img.width, h = img.height, isBw=false) {
  let result = [], pix = img.pixels;
  for (let i = 0; i < w; i+=step) {
    for (let j = 0; j < h; j+=step) {
      let k = ((i + x) + ((j + y) * img.width)) * (isBw ? 1 : 4);
      let pos = { x: i + x, y: j + y};
      let col = [ pix[k], pix[k + 1], pix[k + 2], pix[k + 3] ];
      if (isBw) col = pix[k];
      result.push({pos, col});
    }
  }
  return result;
}

