function setup() {
  w = min(windowWidth, windowHeight);
  createCanvas(w, w);
  pad = w / 10;
  noFill();
  strokeWeight(0.6);
}

function draw() {
  background(255);
  stroke(255, 0, 0); // 设置红色边框
  createCell(pad, pad, w - pad * 2, w - pad * 2, 7);
  noLoop();
}

function createCell(posX, posY, wid, hei, depth) {
  if (depth > 0) {
    createCell(posX, posY, wid / 2, hei / 2, depth - int(random([1, 2])));
    createCell(
      posX + wid / 2,
      posY,
      wid / 2,
      hei / 2,
      depth - int(random([1.8, 2]))
    );
    createCell(
      posX,
      posY + hei / 2,
      wid / 2,
      hei / 2,
      depth - int(random([1.8, 2]))
    );
    createCell(
      posX + wid / 2,
      posY + hei / 2,
      wid / 2,
      hei / 2,
      depth - int(random([1.8, 2]))
    );
  } else {
    // 绘制上半圆形
    const centerX = posX + wid / 2;
    const centerY = posY;
    scale(1.5)
    arc(centerX, centerY, wid / 4, wid / 4, -PI, 0);
    arc(centerX, centerY, wid / 2, wid / 2, -PI, 0);
    arc(centerX, centerY, wid / 4 * 3, wid/ 4 * 3, -PI, 0);
    arc(centerX, centerY, wid, wid, -PI, 0);
  }
}
