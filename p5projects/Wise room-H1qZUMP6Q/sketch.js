var sizes = [ 9, 14, 100, 37, 89, 56 ];

function setup() {
  createCanvas(400, 400);
  noFill();
  for (i = 0; i < sizes.length; i++) {
    ellipse(200,sizes[i],50);
  }
}
