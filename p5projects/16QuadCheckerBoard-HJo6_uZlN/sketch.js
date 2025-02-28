function setup() {
  createCanvas(800, 800);
  background(230);
  noFill();
  // drawQuad(300, 300, 400, 400);
  // draw4Quads(300, 300, 400, 400);
  //draw16Quads(300, 300, 400, 400);
  draw16QuadCheckerBoard(200, 200, 400, 400);
}

function draw16QuadCheckerBoard(x, y, w, h) {
  draw16Quads(x, y, w, h);
  x -= w / 2 - w/16;
  y -= h / 2 - h/16;
  w /= 8;
  h /= 8;
  var idx = 0;
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
			if (j % 8 == 0) idx++;
      if (++idx % 2 == 0) {
        //if (j % 8 == 0) idx++;
        draw16Quads(x  + j * w, y +  i * h, w, h);
      }
      
    }
  }
}

function draw16Quads(x, y, w, h) {
  w /= 2;
  h /= 2;
  x -= w / 2;
  y -= h / 2;
  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 2; j++) {
      draw4Quads(x + j * w, y + i * w, w, h);
    }
  }
}

function draw4Quads(x, y, w, h) {
  w /= 2;
  h /= 2;
  x -= w / 2;
  y -= h / 2;
  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 2; j++) {
      drawQuad(x + j * w, y + i * w, w, h);
    }
  }
}

function drawQuad(x, y, w, h) {
  w /= 2;
  h /= 2;
  x -= w;
  y -= h;
  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 2; j++) {
      rect(x + j * w, y + i * w, w, h);
    }
  }
}


