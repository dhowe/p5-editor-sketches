var imgs = [];
var gx = -1,
  gy = -1;

function preload() {
  for (var i = 0; i < 9; i++) {
    imgs[i] = loadImage((i + 1) + ".jpg");
  }
}

function setup() {
  createCanvas(450, 450);
  //noStroke();
}

function mouseMoved() {
  gx = int(map(mouseX, 0, width, 0, 3));
  gy = int(map(mouseY, 0, height, 0, 3));

}


function draw() {
  background(220);
  var idx = 0;
  for (var j = 0; j < 3; j++) {
    for (var i = 0; i < 3; i++) {
      image(imgs[idx++], i * 150, j * 150, 150, 150);
      if (i != gx || j != gy) {
        fill(255);
        rect(i * 150, j * 150, 150, 150);
      }
    }
  }
  fill(0);
  text(gx + "," + gy, 10, 10);
}