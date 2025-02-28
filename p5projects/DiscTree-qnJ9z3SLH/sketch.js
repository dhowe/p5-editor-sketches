// adapted from https://formandcode.com/code-examples/repeat-recursive-tree

let dotSize = 9;
let angleOffsetA = 1.5;
let angleOffsetB = 50;

function setup() {
  createCanvas(900, 600); 
  angleMode(DEGREES);
  noStroke();
  fill(0);
}

function draw() {
  background(235);        
  translate(width/2, height);  
  seed1(dotSize, (270), 0, 0);
  if (random()<0.9) seed1(dotSize, (270), 0, 0); 
  if (random()<0.2) seed2(dotSize, (270), 0, 0);  
  noLoop();
}


function seed1( dotSize,  angle,  x,  y) {
  
  if (dotSize > 1) {
    if (random() > 0.02) {  
      ellipse(x, y, dotSize, dotSize);
      let newx = x + cos(angle) * dotSize;
      let newy = y + sin(angle) * dotSize;
      seed1(dotSize * 0.99, angle - angleOffsetA, newx, newy);   
    }
    else {  
      ellipse(x, y, dotSize, dotSize);
      let newx = x + cos(angle);
      let newy = y + sin(angle);
      seed2(dotSize * 0.99, angle + angleOffsetA, newx, newy);
      seed1(dotSize * 0.60, angle + angleOffsetB, newx, newy);
      seed2(dotSize * 0.50, angle - angleOffsetB, newx, newy);
    } 
  }
}


function seed2( dotSize,  angle,  x,  y) {
  
  if (dotSize > 1.0) {
    if (random() > 0.05) {
      ellipse(x, y, dotSize, dotSize);
      let newx = x + cos(angle) * dotSize;
      let newy = y + sin(angle) * dotSize;
      seed2(dotSize * 0.99, angle + angleOffsetA, newx, newy);
    } 
    else {
      ellipse(x, y, dotSize, dotSize);
      let newx = x + cos(angle);
      let newy = y + sin(angle);
      seed1(dotSize * 0.99, angle + angleOffsetA, newx, newy);  
      seed2(dotSize * 0.60, angle + angleOffsetB, newx, newy);
      seed1(dotSize * 0.50, angle - angleOffsetB, newx, newy);
    }
  }
}

function mouseClicked() {
  redraw();
}
