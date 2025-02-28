function setup() {
  createCanvas(400, 400);
  background(255);
  //drawQuad(110,110,200,200);
  //draw4Quads(110,110,200,200);
  //draw16Quads(110, 110, 200, 200);
  draw16QuadCheckerBoard(110, 110, 200, 200);
}

function draw16QuadCheckerBoard(x, y, w, h) {
  x -= w / 2;
  y -= h / 2;
  w /= 8;
  h /= 8;
  for (var j = 0; j < 8; j++) {
    for (var i = 0; i < 8; i++) {
      rect(x + i * h, y + j * w, w, h);
      if ((i + j * 9) % 2) {
        draw16Quads(x + h / 2 + i * h, y + w / 2 + j * w, w, h);
      }
    }
  }
}

function draw16Quads(x, y, w, h) {
  draw4Quads(x - w / 4, y - h / 4, w / 2, h / 2);
  draw4Quads(x - w / 4, y + h / 4, w / 2, h / 2);
  draw4Quads(x + w / 4, y - h / 4, w / 2, h / 2);
  draw4Quads(x + w / 4, y + h / 4, w / 2, h / 2);
}

function draw4Quads(x, y, w, h) {
  drawQuad(x - w / 4, y - h / 4, w / 2, h / 2);
  drawQuad(x - w / 4, y + h / 4, w / 2, h / 2);
  drawQuad(x + w / 4, y - h / 4, w / 2, h / 2);
  drawQuad(x + w / 4, y + h / 4, w / 2, h / 2);
}

function drawQuad(x, y, w, h) {
  rect(x, y, w / 2, h / 2);
  rect(x - w / 2, y, w / 2, h / 2);
  rect(x - w / 2, y - h / 2, w / 2, h / 2);
  rect(x, y - h / 2, w / 2, h / 2);
}