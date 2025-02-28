
//////////////////////////// Image Helpers ////////////////////////////////


// samples a rectangular section of an image and a pixel array
// @returns array: [ object: { pos, col } ]
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

// get the average color and variance for a section of an image
// @returns object: { average, variance }
function colorData(img, x, y, w, h) {

  // get pixel data from part of the image specified
  let section = img.get(x, y, w, h);
  if (!section.pixels.length) section.loadPixels();

  // create a histogram of colors in the section
  const histogram = new Uint32Array(1024);
  for (let i = 0, n = section.pixels.length; i < n; i += 4) {
    ++histogram[0 * 256 + section.pixels[i + 0]];
    ++histogram[1 * 256 + section.pixels[i + 1]];
    ++histogram[2 * 256 + section.pixels[i + 2]];
    ++histogram[3 * 256 + section.pixels[i + 3]];
  }

  // get the average color and variance for the section
  const [r, re] = weightedMean(histogram.subarray(0, 256));
  const [g, ge] = weightedMean(histogram.subarray(256, 512));
  const [b, be] = weightedMean(histogram.subarray(512, 768));
  
  // compute the variance according to our perceptiond
  const variance = re * 0.2989 + ge * 0.5870 + be * 0.1140;

  return {average: color(r, g, b), variance};
}

// gets the average and variance from histogram
function weightedMean(histogram) {
  let total = 0, value = 0;
  for (let i = 0; i < 256; ++i) {
    total += histogram[i];
    value += histogram[i] * i;
  }
  value /= total;
  let error = 0;
  for (let i = 0; i < 256; ++i) {
    error += (value - i) ** 2 * histogram[i];
  }
  return [value, Math.sqrt(error / total)];
}

// converts r,g,b to hex color string
function rgbToHex(col) {
  let [r,g,b] = col instanceof p5.Color ? col.levels: col;
  return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}

// adapted from code by Mike Bostock

