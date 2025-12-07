/*

CITATION: 
After doing a little research on getting the brightness of a set of pixels
I found the p5js brightness() function. https://p5js.org/reference/p5/brightness/

Easier than adding the rgb values and dividing by 3. 

*/

let leftEars = [];
let leftEyes = [];
let rightEars = [];
let rightEyes = [];
let noses = [];
let mouths = [];
let fullFaces = [];
let fullFaceR;
let fullFaceG;
let fullFaceB;
let minCol = 0;
let maxCol = 255;
let howMany = 29;

let imgs;
function preload() {
  imgs = loadImagesFromFolder('mouth');
}

function loadImagesFromFolder(folder) {
  
}

function setup() {
  createCanvas(768, 1024);
  print(imgs);
  // baseFace();
  // displayLeftEar();
  // displayRightEar();
  // displayNose();
  // displayLeftEye();
  // displayRightEye();
  // displayMouth();
}

function resetSketch() {
  baseFace();
  displayLeftEar();
  displayRightEar();
  displayNose();
  displayLeftEye();
  displayRightEye();
  displayMouth();
}

function drawx() {
  doFPS();

  if(mouseIsPressed == true) {
    resetSketch();
  }
}

function baseFace() {
  let fullFace = floor(random(0, 6));
  fullFaceR = floor(random(minCol, maxCol));
  fullFaceG = floor(random(minCol, maxCol));
  fullFaceB = floor(random(minCol, maxCol));
  let currentPic = fullFaces[fullFace];
  let threshold = 60;
  let myNewImage;
  myNewImage = createImage(currentPic.width, currentPic.height);

  for (let y = 0; y < currentPic.height; y++) {
    for (let x = 0; x < currentPic.width; x++) {
      // Get the pixel color at (x, y)
      let pixel = currentPic.get(x, y);
      // Get the brightness value of the pixel
      let gray = brightness(pixel);
      // If the pixel is greater than the threshold, return white, otherwise return black
      if (gray > threshold) {
        myNewImage.set(x, y, color(255, 100));
      } else {
        myNewImage.set(x, y, color(0, 20));
      }
    }
  }
  myNewImage.updatePixels();
  tint(random(0, 255), random(80, 200), random(80, 200));
  image(currentPic, 0, 0);
  noTint();
  tint(random(0, 255), random(80, 200), random(80, 200));
  image(myNewImage, 0, 0);
  noTint();
}

function displayLeftEye() {
    let currentPic = leftEyes[floor(random(0, 29))];
    let threshold = 60;

    let myNewImage;
    myNewImage = createImage(currentPic.width, currentPic.height);

    for (let y = 0; y < currentPic.height; y++) {
      for (let x = 0; x < currentPic.width; x++) {

        // Get the pixel color at (x, y)
        let pixel = currentPic.get(x, y);

        // Get the brightness value of the pixel
        let gray = brightness(pixel);

        // compare the pixel against the threshold.
        if (gray > threshold) {
          myNewImage.set(x, y, color(255, 240));
        } else {
          myNewImage.set(x, y, color(0, 255));
        }
      }
    }
    myNewImage.updatePixels();

    let m = createGraphics(myNewImage.width, myNewImage.height);
    m.quad(random(-20, 20), random(-20, 20), 200 + random(-20, 20), random(-20, 20), 200 + random(-20, 20), 150 + random(-20, 20), random(-20, 20), 150 + random(-20, 20));
    myNewImage.mask(m);


    tint(fullFaceG + 40, fullFaceR + 40, fullFaceB + 40);
    image(myNewImage, random(147,167), random(390,410));
    noTint();
}

function displayRightEye() {

    let currentPic = rightEyes[floor(random(0, 29))];
    let threshold = 60;

    let myNewImage;
    myNewImage = createImage(currentPic.width, currentPic.height);

    for (let y = 0; y < currentPic.height; y++) {
      for (let x = 0; x < currentPic.width; x++) {

        // Get the pixel color at (x, y)
        let pixel = currentPic.get(x, y);

        // Get the brightness value of the pixel
        let gray = brightness(pixel);

        // compare the pixel against the threshold.
        if (gray > threshold) {
          myNewImage.set(x, y, color(255, 240));
        } else {
          myNewImage.set(x, y, color(0, 255));
        }
      }
    }
    myNewImage.updatePixels();

    let m = createGraphics(myNewImage.width, myNewImage.height);
    m.quad(random(-20, 20), random(-20, 20), 200 + random(-20, 20), random(-20, 20), 200 + random(-20, 20), 150 + random(-20, 20), random(-20, 20), 150 + random(-20, 20));
    myNewImage.mask(m);


    tint(fullFaceG + 40, fullFaceR + 40, fullFaceB + 40);
    image(myNewImage, random(390,410), random(390,410));
    noTint();

}



function displayLeftEar() {
  let leftEar = floor(random(0, 29));
  let currentPic = leftEars[leftEar];
  // Make Mask
  let m = createGraphics(currentPic.width, currentPic.height);
  for (let i = 0; i < 50; i++) {
    for (let j = 0; j < 100; j++) {
      m.circle(i * 15, j * 15, 180 / j + 5);
    }
  }
  currentPic.mask(m);
  tint(fullFaceG + 80, fullFaceR + 80, fullFaceB + 80);
  image(currentPic, 34, 400);
  noTint();
}

function displayRightEar() {
  rightEar = floor(random(0, 29));
  //tint(fullFaceR-20, fullFaceG-20, fullFaceB-20);
  let currentPic = rightEars[rightEar];

  // Make Mask
  let m = createGraphics(currentPic.width, currentPic.height);
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 30; j++) {
      m.circle(i * 15, j * 15, 60 / i + 5);
    }
  }
  currentPic.mask(m);
  tint(fullFaceG + 80, fullFaceR + 80, fullFaceB + 80);
  image(currentPic, 616, 362);
  noTint();
}

function displayNose() {
  let nose = floor(random(0, 29));
  let currentPic = noses[nose];

  // Make Mask
  let m = createGraphics(currentPic.width, currentPic.height);

  let numCircles = 20; 
  let spacing = currentPic.width / numCircles; 
  let maxDist = dist(0, 0, width / 2, height/3); 

  // Nested loops to create the grid
  for (let i = 0; i < numCircles; i++) {
    for (let j = 0; j < numCircles * 2; j++) {
      // Calculate the position of each circle
      let x = i * spacing;
      let y = j * spacing;

      // Calculate the distance from the current circle to the center of the canvas
      let d = dist(x, y, currentPic.width / 2, currentPic.height / 2);

      // Map the distance to a size value.
      let circleSize = map(d, maxDist, 0, -25, 15);

      // Draw the circle
      fill(50);
      m.ellipse(x, y, circleSize, circleSize);
    }
  }
  currentPic.mask(m);
  tint(fullFaceG + 80, fullFaceR + 80, fullFaceB + 80);

  image(currentPic, 278, 400);
  noTint();
}


function displayMouth() {

    let currentPic = mouths[floor(random(0, 29))];
    let threshold = 60;
    let myNewImage = createImage(currentPic.width, currentPic.height);

    for (let y = 0; y < currentPic.height; y++) {
      for (let x = 0; x < currentPic.width; x++) {

        // Get the pixel color at (x, y)
        let pixel = currentPic.get(x, y);

        // Get the brightness value of the pixel
        let gray = brightness(pixel);

        // compare the pixel against the threshold.
        if (gray > threshold) {
          myNewImage.set(x, y, color(255, 240));
        } else {
          myNewImage.set(x, y, color(0, 255));
        }
      }
    }
    myNewImage.updatePixels();

    let m = createGraphics(myNewImage.width, myNewImage.height);
    m.quad(random(-20, 20), random(-20, 20), 300 + random(-20, 20), random(-20, 20), 300 + random(-20, 20), 150 + random(-20, 20), random(-20, 20), 150 + random(-20, 20));
    myNewImage.mask(m);

    tint(fullFaceG + 40, fullFaceR + 40, fullFaceB + 40);
    image(myNewImage, 231, 669);
    noTint();
}

function doFPS() {
  fill(255);
  noStroke();
  let myText = "FPS: " + floor(frameRate());
  rect(10, 10, 46, 12);
  fill(0);
  text(myText, 10, 20);
}
