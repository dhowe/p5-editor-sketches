var img, imgSz = 128, sf = 6;
var grays = [], data = "";
var saveData = true;

function preload() {
  img = loadImage('carrie128.png');
}

// noprotect
function setup() {
  createCanvas(128 * sf, 128 * sf);
  noStroke();
  img.filter('gray');
  img.loadPixels();
  for (var i = 0; i < img.pixels.length; i += 4) {
    grays.push(img.pixels[i]);
  }
}

function draw() {
  background('#ED225D');

  if (saveData) {
    
    saveJSON({
      'width': img.width,
      'height': img.height,
      'pixels': grays
    }, 'pixels');
    noLoop();
    
  } else {
	
    image(img, 0, 0, 64, 64);

    var sz = map(mouseX, 0, width, 1, 32);
    
    for (var i = 0; i < 128; i++) {
      for (var j = 0; j < 128; j++) {
        var idx = i * 128 + j;
        fill(grays[idx]);
        ellipse(j * sf, i * sf, map(grays[idx], 0, 255, 10, 0));
      }
    }
  }
}