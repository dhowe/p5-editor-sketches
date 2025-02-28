let img;

function preload() {
  img = loadImage("dhimage.jpg");
}

function setup() {
  createCanvas(540, 540);
  ellipseMode(CORNER);
  noStroke();
  fill(0);
  
  img.resize(width, height);
  img.loadPixels();
}

function draw() {
  background(240);
  let thresh = 150;
  
  // map brightness threshold to the mouse
  if (mouseX > 0) {
    thresh = map(mouseX, 0, width, 70, 200, true);
  }
  
  for (let y = 0; y < img.height; y += 10) {
    for (let x = 0; x < img.width; x += 5) {
      let col = img.get(x, y);
      
      // simple average
      col = (col[0] + col[1] + col[2]) / 3;
      
      // draw ellipses for each if above threshold
      if (col < thresh) {
        let sz = 255 - col;
        ellipse(x, y, max(5, sz / 15), max(2, sz / 30));
      }
    }
  }
}
