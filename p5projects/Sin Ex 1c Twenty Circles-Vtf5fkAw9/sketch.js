let count = 20;

function setup() {
  createCanvas(400, 400);
  noFill();
}

function draw() {
  background(255);
  for (let i = 0; i < count; i++) {
    
    // get the sin of frameCount (which is continually increasing)
    // to make it go up more slowly, we divide by 50
    // KEY: but we add i (which is unique to each) so they each 
    // change at slightly different rates
    let num = sin(frameCount / (50 + i));

    // again map to the range we want
    let diam = map(num, -1, 1, 1, 400);

    circle(200, 200, diam);
  }
}
