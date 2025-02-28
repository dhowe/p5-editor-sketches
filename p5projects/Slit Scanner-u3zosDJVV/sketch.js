let cam;

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  
  cam = createCapture(VIDEO);
  cam.size(640, 480);
  cam.hide();
}

function draw() {
  cam.loadPixels();
  
  // move right one pixel per frame
  let x = frameCount % width;
  
  // copy the center column of pixels to x-position on canvas
  copy(cam, cam.width/2, 0, 1, cam.height, x, 0, 1, cam.height);  
}
