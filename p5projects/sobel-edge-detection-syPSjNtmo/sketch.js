let img, edgeImg, edgeMap;
let particles = [];

// change this for varying sims
let brightnessThreshold = 180; 

function preload() {
  img = loadImage('barn.jpg');
}

function setup() {
  createCanvas(img.width, img.height);
  pixelDensity(1);

  // run sobel edge detection and create an edge map
  edgeImg = sobelEdgeDetection(img);
  edgeMap = generateEdgeMap(edgeImg);

  console.log(img.width, img.height);
  console.log(edgeImg.width, edgeImg.height);
  console.log(edgeMap.length, edgeMap[0].length);
    // new initial particles, spawned on bright pixel locations
//   for (let i = 0; i < 2000; i++) {
//     let pos = findBrightPixel(edgeMap);
//     particles.push(new Particle(pos.x, pos.y));
//   }
  
//   // button to save canvas
//   let saveButton = createButton("save canvas");
//   saveButton.position(img.width+10, 0);
//   saveButton.mousePressed(() => saveCanvas("myCanvas", "png"));
  
//   background(0,255);
}

function draw() {
  //background(0, 2); // trailing
  clear();
  // uncomment to display the sobel edge map
  //image(edgeImg, 0, 0, width, height);
  
  for (let x = 0; x < edgeMap.length; x++) {
    
  }
  noLoop();
  // update & display particles
  // for (let p of particles) {
  //   p.update();
  //   p.show();
  // }
}

// sobel edge detection function
function sobelEdgeDetection(source) {
  // create output img w/ same dims as source
  let output = createGraphics(source.width, source.height);
  output.loadPixels();
  source.loadPixels();

  // define sobel kernels
  let kernelX = [[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]];
  let kernelY = [[-1, -2, -1], [0,  0,  0], [1,  2,  1]];

  // apply sobel filters
  for (let x = 1; x < source.width - 1; x++) {
    for (let y = 1; y < source.height - 1; y++) {
      let sumX = 0, sumY = 0;

      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          let px = (x + i + (y + j) * source.width) * 4;
          let gray = (source.pixels[px] + source.pixels[px + 1] + source.pixels[px + 2]) / 3;
          sumX += gray * kernelX[i + 1][j + 1];
          sumY += gray * kernelY[i + 1][j + 1];
        }
      }

      let edgeValue = sqrt(sumX * sumX + sumY * sumY);
      edgeValue = constrain(edgeValue, 0, 255);

      // update output images pixel values
      let index = (x + y * source.width) * 4;
      output.pixels[index] = edgeValue;
      output.pixels[index + 1] = edgeValue;
      output.pixels[index + 2] = edgeValue;
      output.pixels[index + 3] = 255;
    }
  }

  output.updatePixels();
  return output;
}

// generate an edge map from the output image
// based on the defined brightness threshold
function generateEdgeMap(edgeImg) {
  edgeImg.loadPixels();
  let edgeMap = [];
  for (let x = 0; x < edgeImg.width; x++) {
    edgeMap[x] = [];
    for (let y = 0; y < edgeImg.height; y++) {
      let index = (x + y * edgeImg.width) * 4;
      let brightness = edgeImg.pixels[index];
      edgeMap[x][y] = brightness > brightnessThreshold ? 1 : 0;
    }
  }
  return edgeMap;
}

// finds a bright pixel and returns it
function findBrightPixel(edgeMap) {
  while (true) {
    let x = floor(random(width));
    let y = floor(random(height));
    if (edgeMap[x][y] === 1) {
      return createVector(x, y);
    }
  }
}

// Particle class
class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
  }

  // calculate possible moves in 8 directions, pick random
  update() {
    let possibleMoves = [];

    let directions = [
      createVector(-1, -1), createVector(0, -1), createVector(1, -1),
      createVector(-1,  0), createVector(1,  0),
      createVector(-1,  1), createVector(0,  1), createVector(1,  1)
    ];

    shuffleArray(directions);

    for (let d of directions) {
      let newX = floor(this.pos.x + d.x);
      let newY = floor(this.pos.y + d.y);

      if (newX >= 0 && newX < width && newY >= 0 && newY < height && edgeMap[newX][newY] === 1) {
        possibleMoves.push(createVector(newX, newY));
      }
    }

    if (possibleMoves.length > 0) {
      this.pos = random(possibleMoves);
    }
  }

  // display particle, tweak for variations
  show() {
    stroke(255, random(50,220), 0, 200);
    strokeWeight(1);
    point(this.pos.x, this.pos.y);
  }
}

// helper function to shuffle array efficiently
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = floor(random(i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
