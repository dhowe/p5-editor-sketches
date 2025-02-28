var data;

function preload() {

  data = loadJSON("https://rednoise.org/imc/data/pixels.json");
}

function setup() {

  createCanvas(512, 512);
  noStroke();
  background(255);
  fill(0);
  for (var y = 0; y < data.height; y++) {
    for (var x = 0; x < data.width; x++) {
      
      var index = y * data.width + x;
      var gs = data.pixels[index];
			ellipse(x*4, y*4, map(gs, 0, 255, 6, 0));
    }
  }
}