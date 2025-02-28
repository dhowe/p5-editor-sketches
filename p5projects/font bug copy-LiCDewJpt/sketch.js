function setup() {
  createCanvas(400, 400);
  textSize(30);
  textAlign(CENTER, CENTER);
  noLoop();
}

function draw() {
  background(220);

  textFont("DotGothic16");
  text("Hi There", 200, 100);

  // extra quotes
  textFont("Press Start 2P");
  text("Hi There", 200, 300);
}
