let img;

function preload() {
  img = loadImage("flower.jpg");
}

function setup() {
  createCanvas(512, 512);
  image(img,0,0);
  loadPixels();
}

function draw() {
  background(255);
  noStroke();
  randomSeed(0);
  let size = floor(map(mouseX, 0, width, 52,  1, true));

  for (let x = 0; x < width; x += size) {
    for (let y = 0; y < height; y += size) {
      let index = (x + y * width) * 4;

      // point-sampling
      let r = pixels[index];
      let g = pixels[index + 1];
      let b = pixels[index + 2]

      fill(r, g, b);
      circle(x+size/2, y+size/2, size);
    }
  }
}


// returns { mean color, variance } for a section of an image
function colorData(img, x, y, w, h) {

  function pixelsForSection(img, x, y, w, h) {
    if (!img.pixels.length) img.loadPixels();
    let result = [], pix = img.pixels;
    for (let i = 0; i < w; i++) {
      for (let j = 0; j < h; j++) {
        let k = ((i + x) + ((j + y) * img.width)) * 4;
        result.push(pix[k], pix[k + 1], pix[k + 2], pix[k + 3]);
      }
    }
    return result;
  }

  const weightedMean = (histogram) => {
    let total = 0, value = 0;
    for (let i = 0; i < 256; ++i) {
      total += histogram[i], value += histogram[i] * i;
    }
    value /= total;
    let error = 0;
    for (let i = 0; i < 256; ++i) {
      error += (value - i) ** 2 * histogram[i];
    }
    let stdDev = Math.sqrt(error / total);
    return [value, stdDev];
  }

  const colorTable = (data) => {
    const histogram = new Uint32Array(1024);
    for (let i = 0, n = data.length; i < n; i += 4) {
      ++histogram[0 * 256 + data[i + 0]];
      ++histogram[1 * 256 + data[i + 1]];
      ++histogram[2 * 256 + data[i + 2]];
      ++histogram[3 * 256 + data[i + 3]];
    }
    return histogram;
  }

  if (!img.pixels.length) img.loadPixels();

  // adapted from mike bostock
  let histogram = colorTable(pixelsForSection(img, x, y, w, h));
  const [r, rsd] = weightedMean(histogram.subarray(0, 256));
  const [g, gsd] = weightedMean(histogram.subarray(256, 512));
  const [b, bsd] = weightedMean(histogram.subarray(512, 768));

  // adjust according to perceived brightness (luminance)
  let variance = rsd * 0.2989 + gsd * 0.5870 + bsd * 0.1140;

  return { average: color(r, g, b, 200), variance };
}
