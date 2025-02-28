let state = 2, url = "dhimage.jpg", img, size;

function preload() {
  img = loadImage(url);
}

function mouseClicked() {
  state = ++state % 8;
  loop();
}

function setup() {
  size = min(windowWidth, windowWidth) * 0.85;
  createCanvas(size, size);
  textSize(20);
}

function draw() {
  background(255, 224, 130);

  switch (state) {
    case 0:
      pimg = img;
      msg = "original";
      break;

    case 1:
      pimg = imageGlow(imageCRT(img, 50, 0), 5, 0.5);
      msg = "crt glow effect";
      break;

    case 2:
      pimg = imageLines(img, 50);
      msg = "horizontal lines";
      break;

    case 3:
      pimg = imageRGBLines(img, 40);
      msg = "alternated RGB lines";
      break;

    case 4:
      pimg = imageDots(img, 8, 1, 2, 0.5);
      msg = "dots effect";

      break;

    case 5:
      pimg = imageDots(img, 15, 0);
      msg = "aligned dots";
      break;

    case 6:
      pimg = imageDots2(img, 15, 0, 1);
      msg = "single-size dots";
      break;

    case 7:
      pimg = imageRGBTranslate(img, -50, -50, 0, 0, 50, 50);
      msg = "rgb translate";
      break;
  }

  image(pimg, 0, 0, size, size);
  fill(0);
  rect(0, 0, width, 40);
  fill(255);
  text(msg, 20, 27);
  noLoop();
}

// effects from https://editor.p5js.org/Estienne/sketches/9aYpczTzf

/**
 * Creates an image composed of black horizontal lines
 * @param {p5.Image} img - Input image
 * @param {number} lines - Number of lines
 * @param {number} [thickness = 1] - Maximum thickness of each line
 * @returns {p5.Image} Returns the created image
 */
function imageLines(img, lines, thickness = 1) {
  let imgIn = img.get();
  imgIn.resize(0, lines);
  imgIn.filter(GRAY);
  imgIn.loadPixels();
  let path = [];
  let imgOut = createGraphics(img.width, img.height);
  for (let y = 0; y < imgIn.height; y++) {
    path[y] = [];
    for (let x = 0; x < imgIn.width; x++) {
      let i = 4 * (x + y * imgIn.width);
      let v = 1 - imgIn.pixels[i] / 255;
      if (x == 0) {
        path[y].push(createVector(x - 2, y + 0.5 - thickness * (v / 2)));
        path[y].unshift(createVector(x - 2, y + 0.5 + thickness * (v / 2)));
        path[y].push(createVector(x, y + 0.5 - thickness * (v / 2)));
        path[y].unshift(createVector(x, y + 0.5 + thickness * (v / 2)));
      }
      path[y].push(createVector(x + 0.5, y + 0.5 - thickness * (v / 2)));
      path[y].unshift(createVector(x + 0.5, y + 0.5 + thickness * (v / 2)));
      if (x == imgIn.width - 1) {
        path[y].push(createVector(x + 1, y + 0.5 - thickness * (v / 2)));
        path[y].unshift(createVector(x + 1, y + 0.5 + thickness * (v / 2)));
        path[y].push(createVector(x + 3, y + 0.5 - thickness * (v / 2)));
        path[y].unshift(createVector(x + 2, y + 0.5 + thickness * (v / 2)));
      }
    }
  }
  imgOut.noStroke();
  imgOut.fill(0);
  let s = img.height / lines;
  for (let sh of path) {
    imgOut.beginShape();
    for (let p of sh) {
      imgOut.curveVertex(p.x * s, p.y * s);
    }
    imgOut.endShape(CLOSE);
  }
  return imgOut;
}

/**
 * Creates an image composed of offseted RGB horizontal lines
 * @param {p5.Image} img - Input image
 * @param {number} lines - Number of lines (each one composed of 3 color-lines)
 * @param {number} [thickness = 1] - Maximum thickness of each line
 * @param {number} [offset = 1] - offset intensity from 0 (no offset) to 1 (normal offset of 1/3) between each color line
 * @returns {p5.Image} Returns the created image
 */
function imageRGBLines(img, lines, thickness = 1, offset = 1) {
  let imgIn = img.get();
  imgIn.resize(0, lines);
  imgIn.loadPixels();
  let path = [];
  for (let c = 0; c < 3; c++) {
    path[c] = [];
    for (let y = 0; y < imgIn.height; y++) {
      path[c][y] = [];
      for (let x = 0; x < imgIn.width; x++) {
        let i = 4 * (x + y * imgIn.width);
        let v = imgIn.pixels[i + c] / 255;
        if (x == 0) {
          path[c][y].push(createVector(x - 2, y + 0.5 - thickness * (v / 2)));
          path[c][y].unshift(
            createVector(x - 2, y + 0.5 + thickness * (v / 2))
          );
          path[c][y].push(createVector(x, y + 0.5 - thickness * (v / 2)));
          path[c][y].unshift(createVector(x, y + 0.5 + thickness * (v / 2)));
        }
        path[c][y].push(createVector(x + 0.5, y + 0.5 - thickness * (v / 2)));
        path[c][y].unshift(
          createVector(x + 0.5, y + 0.5 + thickness * (v / 2))
        );
        if (x == imgIn.width - 1) {
          path[c][y].push(createVector(x + 1, y + 0.5 - thickness * (v / 2)));
          path[c][y].unshift(
            createVector(x + 1, y + 0.5 + thickness * (v / 2))
          );
          path[c][y].push(createVector(x + 3, y + 0.5 - thickness * (v / 2)));
          path[c][y].unshift(
            createVector(x + 2, y + 0.5 + thickness * (v / 2))
          );
        }
      }
    }
  }
  let imgOut = createGraphics(img.width, img.height);
  imgOut.background(0);
  imgOut.blendMode(SCREEN);
  imgOut.noStroke();
  let s = img.height / lines;
  for (let c = 0; c < 3; c++) {
    imgOut.fill([color(255, 0, 0), color(0, 255, 0), color(0, 0, 255)][c]);
    for (let sh of path[c]) {
      imgOut.beginShape();
      for (let p of sh) {
        let o = [-0.33 * offset, 0, 0.33 * offset][c];
        imgOut.curveVertex((p.x + o) * s, (p.y + o) * s);
      }
      imgOut.endShape(CLOSE);
    }
  }
  return imgOut;
}

/**
 * Creates an image in the style of old CRT screens
 * @param {p5.Image} img - Input image
 * @param {number} columns - Number of columns of pixels to create
 * @param {number} [backlight = 50] - Quantity of backlight to add from 0 to 255
 * @param {number} [contour = 0.05] - Contour thickness ratio according to a generated pixel size
 * @returns {p5.Image} Returns the created image
 */
function imageCRT(img, columns, backlight = 50, contour = 0.05) {
  let imgIn = img.get();
  let ratio = imgIn.width / imgIn.height;
  imgIn.resize(columns, round((2 * columns) / ratio));
  imgIn.loadPixels();
  let size = img.width / columns;
  let imgOut = createGraphics(img.width, img.height);
  imgOut.background(0);
  imgOut.strokeWeight(size * contour);
  imgOut.stroke(0);
  for (let x = 0; x < imgIn.width + 0.5; x++) {
    let offset = (x % 2) / 2;
    for (let y = 0 - 2 * offset; y < imgIn.height + 0.5; y++) {
      let xPix = constrain(x, 0, imgIn.width - 1);
      let yPix = constrain(2 * y, 0, imgIn.height - 1);
      let i = 4 * (xPix + yPix * imgIn.width);
      let r = imgIn.pixels[i] + backlight;
      let g = imgIn.pixels[i + 1] + backlight;
      let b = imgIn.pixels[i + 2] + backlight;
      imgOut.fill(r, 0, 0);
      imgOut.rect(x * size, (y + offset) * size, size / 3, size);
      imgOut.fill(0, g, 0);
      imgOut.rect((x + 1 / 3) * size, (y + offset) * size, size / 3, size);
      imgOut.fill(0, 0, b);
      imgOut.rect((x + 2 / 3) * size, (y + offset) * size, size / 3, size);
    }
  }
  return imgOut;
}

/**
 * Creates a glow effect based on the input image
 * @param {p5.Image} img - Input image
 * @param {number} [intensity = 1] - Intensity of the glow effect
 * @param {number} [size = 1] - Size of the glow effect proportional to the input image
 * @returns {p5.Image} Returns the image with a glow effect applied
 */
function imageGlow(img, intensity = 1, size = 1) {
  let imgIn = img.get();
  imgIn.filter(BLUR, round((size * img.width + img.height) / 200));
  imgOut = createGraphics(img.width, img.height);
  imgOut.background(0);
  imgOut.blendMode(SCREEN);
  imgOut.image(img, 0, 0);
  for (let i = 0; i < intensity; i++) {
    imgOut.tint(255, 255 * min(intensity - i, 1));
    imgOut.image(imgIn, 0, 0);
  }
  return imgOut;
}

/**
 * Creates an image composed of dots of different sizes
 * @param {p5.Image} img - Input image
 * @param {number} diameter - Max diameter of the dots
 * @param {number} [randomness = 1] - Randomness of the dots positions
 * @param {number} [ratio = 1] - Ratio applied to the dots diameters (used to make the dots overlap when ratio > 1)
 * @param {number} [opacity = 1] - Opacity of the dots
 * @returns {p5.Image} Returns the image composed of dots
 */
function imageDots(img, diameter, randomness = 1, ratio = 1, opacity = 1) {
  let imgIn = img.get();
  let imgOut = createGraphics(img.width, img.height);
  imgOut.fill(0, opacity * 255);
  imgOut.noStroke();
  imgIn.resize(round(imgIn.width / diameter), round(imgIn.height / diameter));
  imgIn.filter(GRAY);
  imgIn.loadPixels();
  let centers = [];
  for (let y = 0; y < imgIn.height; y++) {
    for (let x = 0; x < imgIn.width; x++) {
      let d = (1 - imgIn.pixels[4 * (x + y * imgIn.width)] / 255) * diameter;
      imgOut.circle(
        (x + randomness * (random() - 0.5) + 0.5) * diameter,
        (y + randomness * (random() - 0.5) + 0.5) * diameter,
        d * ratio
      );
    }
  }
  return imgOut;
}

/**
 * Creates an image composed of dots of same sizes
 * @param {p5.Image} img - Input image
 * @param {number} diameter - Max diameter of the dots
 * @param {number} [randomness = 1] - Randomness of the dots positions
 * @param {number} [ratio = 1] - Ratio applied to the dots diameters (used to make the dots overlap when ratio > 1)
 * @param {number} [opacity = 1] - Opacity of the dots
 * @param {number} [threshold = 1] - Threshold
 * @returns {p5.Image} Returns the image composed of dots
 */
function imageDots2(
  img,
  diameter,
  randomness = 1,
  ratio = 1,
  opacity = 1,
  threshold = 1
) {
  let imgIn = img.get();
  let imgOut = createGraphics(img.width, img.height);
  imgOut.fill(0, opacity * 255);
  imgOut.noStroke();
  imgIn.resize(round(imgIn.width / diameter), round(imgIn.height / diameter));
  imgIn.filter(GRAY);
  imgIn.loadPixels();
  let centers = [];
  for (let y = 0; y < imgIn.height; y++) {
    for (let x = 0; x < imgIn.width; x++) {
      let d = 1 - imgIn.pixels[4 * (x + y * imgIn.width)] / 255;
      if (d > random(threshold)) {
        imgOut.circle(
          (x + randomness * (random() - 0.5) + 0.5) * diameter,
          (y + randomness * (random() - 0.5) + 0.5) * diameter,
          diameter * ratio
        );
      }
    }
  }
  return imgOut;
}

/**
 * Translate RGB channels individually
 * @param {p5.Image} img - Input image
 * @param {number} [rx = 0] - Horizontal translation of the red channel
 * @param {number} [ry = 0] - Vertical translation of the red channel
 * @param {number} [gx = 0] - Horizontal translation of the green channel
 * @param {number} [gy = 0] - Vertical translation of the green channel
 * @param {number} [bx = 0] - Horizontal translation of the blue channel
 * @param {number} [by = 0] - Vertical translation of the blue channel
 * @returns {p5.Image} Returns the image translated RGB channels
 */
function imageRGBTranslate(
  img,
  rx = 0,
  ry = 0,
  gx = 0,
  gy = 0,
  bx = 0,
  by = 0
) {
  let imgIn = img.get();
  let w = img.width;
  let h = img.height;
  let imgOut = createImage(w, h);
  imgIn.loadPixels();
  imgOut.loadPixels();
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      let rxOut = constrain(x + rx, 0, w - 1);
      let ryOut = constrain(y + ry, 0, h - 1);
      let ir = 4 * (rxOut + ryOut * w);
      let gxOut = constrain(x + gx, 0, w - 1);
      let gyOut = constrain(y + gy, 0, h - 1);
      let ig = 4 * (gxOut + gyOut * w) + 1;
      let bxOut = constrain(x + bx, 0, w - 1);
      let byOut = constrain(y + by, 0, h - 1);
      let ib = 4 * (bxOut + byOut * w) + 2;
      let i = 4 * (x + y * w);
      imgOut.pixels[ir] = imgIn.pixels[i];
      imgOut.pixels[ig] = imgIn.pixels[i + 1];
      imgOut.pixels[ib] = imgIn.pixels[i + 2];
      imgOut.pixels[i + 3] = 255;
    }
  }
  imgOut.updatePixels();
  return imgOut;
}
