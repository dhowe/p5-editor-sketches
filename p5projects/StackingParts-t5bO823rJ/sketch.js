let x = [], y = [], xspd = [], yspd = [];
let radius = 4, cols = [], numCols;
let stopPos = [], colHeights = [];

function setup() {

  createCanvas(400, 400);
  noStroke();
  fill(0);
  numCols = width / (radius * 2); // number of columns
  for (let i = 0; i < numCols; i++) {
    colHeights[i] = 0; // set each col height to 0
  }
}

function mouseDragged() {
  
  // which column are we in?
  let col = floor(map(mouseX, 0, width, 0, numCols));
  cols.push(col); // store it
  
  stopPos.push(-1); // not stopped
  x.push(col * width / numCols);
  y.push(mouseY);
  xspd.push(0);
  yspd.push(random(-1, -3));
}

function draw() {

  background(245);

  for (let i = 0; i < x.length; i++) {
    let colHeight = height - (radius*2 * colHeights[cols[i]]);
    if (stopPos[i] == -1) {
      x[i] += xspd[i];
      y[i] += yspd[i];
      yspd[i] += 0.098; // gravity
      
      if (y[i] > colHeight) { // we've hit bottom
        colHeights[cols[i]]++;
        stopPos[i] = colHeight - radius;
      }
    }
    
    // if stopped, use that pos for y
    if (stopPos[i] != -1) { 
      y[i] = stopPos[i];
    }
    
    circle(x[i], y[i], radius * 2);
  }
}