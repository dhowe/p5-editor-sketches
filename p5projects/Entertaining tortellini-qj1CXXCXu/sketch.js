let r = 200,
  cx = 200,
  cy = 200,
  paused = false,
  theta = 0, frames = 0;

function setup() {
  createCanvas(800, 400);
  frameRate(30);
}

function draw() {
  if (!paused) {
    background(245);
    noFill();
    drawingContext.setLineDash([]);
    
    
    arc(cx, cy, r * 2, r * 2, radians(-theta), radians(0));

    let quadrant = ceil((theta%360)/90);
    let x = cx + r * cos(radians(360 - theta));
    let y = cy + r * sin(radians(360 - theta));
    circle(x,y, 5);

    line(cx, 0, cx, height); // y-axis
    line(0, cy, width, cy); // x-axis
    line(cx, cy, x, y);    // hypotenuse
    line(cx, cy, x, cy);  // adjacent
    line(x, y, x, cy);   //opposite
    rect(x, 200,  10 * (quadrant % 3 == 1 ? -1:1), 
         10 * (quadrant <3 ? -1:1) ); // right-triangle symbol
  
    
    fill(0);
    textSize(12);
    text("H", 0.5 * cx + 0.5 * x, 0.5 * cy + 0.5 * y);
    // text("A", 0.5 * cx + 0.5 * x, 0.5 * cy + 0.5 * cy);
    text("O", 0.5 * x + 0.5 * x, 0.5 * y + 0.5 * cy);


    let oppositeLength = dist(x, y, x, cy) * (y < cy ? 1 : -1);
    let sinval = oppositeLength  / r;

    textSize(18);
    text("Θ = " + (theta % 360), 390, 40);
    text("quadrant = " + quadrant, 390, 65);  
    text("sin(Θ) = " + nf(sinval, 1, 2), 390, 90);

    circle(440,y,5);
    for (let i = 0; i < 360; i++) {
      let y = map(sin(radians(i+theta)),-1,1,400,0);
      point(440+i,y);
    }
    
    drawingContext.setLineDash([0.5, 5]);
    line(440, y, x, y); //dashed 
    theta++;
  }
}

function mouseClicked() {
  paused = !paused;
}
