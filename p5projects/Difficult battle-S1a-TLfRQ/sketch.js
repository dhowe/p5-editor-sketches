var imgs = [];
var gx = -1, gy = -1;
  
function preload() {
  for (var i = 0; i < 9; i++) {
    imgs[i] = loadImage((i + 1) + ".jpg");
  }
}

function setup() {
  createCanvas(300, 300);
  noStroke();
	fill(255);

}

function draw() {
  
  background(220);
  var imgIdx = 0;
  for (var j = 0; j < 3; j++) {
    for (var i = 0; i < 3; i++) {
    	image(imgs[imgIdx++], i*100, j*100, 100,100);
      if (i != gx ||j != gy) {
      	rect(i*100, j*100, 100,100);
      }
    }
  }
  fill(0);
  text(gx +","+gy, 20,20);
  fill(255);
}

function mouseMoved() {
  gx = int(map( mouseX, 0, width, 0, 3));
  gy = floor(mouseY / 100);
}









