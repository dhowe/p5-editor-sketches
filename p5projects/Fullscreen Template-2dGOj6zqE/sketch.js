function setup() {
  
  // use the full size of the browser
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200);

  // Draw a circle at the center
  circle(width / 2, height / 2, 50);
}

// Resize canvas when browser size changes
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// Toggle fullscreen mode
function mouseClicked() {
  if (!fullscreen()) fullscreen(true);
}



