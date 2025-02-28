let img, cols, numCols = 100;

function preload() {
  img = loadImage("flowers.jpg");
}

function setup() {
  createCanvas(400, 400);
  background(0);
  cols = commonColorsFromImage(img, numCols);
  
  // print out the first colors raw rgba data
  console.log(cols[0]._array);
  
  // print out the first color rgba data from 0-255
  console.log(cols[0]._array.map(c => c * 255));
}

function draw() {
  background(255);
  let cells = floor(sqrt(numCols));
  let cellSz = width / cells;
  for (let i = 0; i < cells; i++) {
    for (let j = 0; j < cells; j++) {
      fill(cols[j+i*cells]);
      square(j*cellSz,i*cellSz,cellSz);
    }
  }
}

// get the 'num' most common colors from the image
function commonColorsFromImage(img, num) {
  
  let cols = {};
  
  // collect all pixel colors and counts
  for (let i = 0; i < img.height; i++) {
    for (let j = 0; j < img.width; j++) {
      let col = img.get(j, i);
      if (!cols.hasOwnProperty(col)) cols[col] = 0;
      cols[col]++;
    }
  }

  // return the most common num colors
  return Object.entries(cols)
    .sort(([, a], [, b]) => b - a)
    .splice(0, num)
    .map((c) => color(...c[0].split(",").map((a) => int(a))));
}
