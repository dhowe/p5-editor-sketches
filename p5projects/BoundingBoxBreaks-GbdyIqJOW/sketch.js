let p = window;      
let x, y, s, showBB = 0;

p.setup = function () {
  p.createCanvas(240 * 5, 400);
  p.background(255);
  p.textSize(30);
  p.textLeading(26);

  ///////////////////////////// BASELINE (L,C,R) ///////////////////////////////
  y = 50;
  p.stroke(0) && p.strokeWeight(1) && p.line(0, y, p.width, y); //h-line

  //1
  x = 10, s = 'LEFT BASELINE\nis easy.';
  p.fill(0) && p.noStroke() && p.textAlign(p.LEFT, p.BASELINE) && p.text(s, x, y);
  //p.noFill() && p.stroke(0) && p.rect(...Object.values(p.textBounds(s, x, y)));
  if (showBB) p.noFill() && p.stroke(0) && p.rect(...Object.values(p.textBounds(s, x, y)));
  p.stroke(0) && p.strokeWeight(1) && p.line(x, 0, x, p.height); // v-line

  //2
  x += 580, s = 'CENTER BASELINE\nis easy.';
  p.fill(0) && p.noStroke() && p.textAlign(p.CENTER, p.BASELINE) && p.text(s, x, y);
  if (showBB) p.noFill() && p.stroke(0) && p.rect(...Object.values(p.textBounds(s, x, y)));
  p.stroke(0) && p.strokeWeight(1) && p.line(x, 0, x, p.height); // v-line

  //3
  x += 600, s = 'RIGHT BASELINE\nis easy.';
  p.fill(0) && p.noStroke() && p.textAlign(p.RIGHT, p.BASELINE) && p.text(s, x, y);
  if (showBB) p.noFill() && p.stroke(0) && p.rect(...Object.values(p.textBounds(s, x, y)));
  p.stroke(0) && p.strokeWeight(1) && p.line(x, 0, x, p.height); // v-line


  /////////////////////////// BOTTOM (L,C,R) /////////////////////////////////
  y += 120;
  p.stroke(0) && p.strokeWeight(1) && p.line(0, y, p.width, y); //h-line

  // 4
  x = 10, s = 'LEFT BOTTOM\nis easy.';
  p.fill(0) && p.noStroke() && p.textAlign(p.LEFT, p.BOTTOM) && p.text(s, x, y);
  if (showBB) p.noFill() && p.stroke(0) && p.rect(...Object.values(p.textBounds(s, x, y)));

  // 5
  x += 580, s = 'CENTER BOTTOM\nis easy.';
  p.fill(0) && p.noStroke() && p.textAlign(p.CENTER, p.BOTTOM) && p.text(s, x, y);
  if (showBB) p.noFill() && p.stroke(0) && p.rect(...Object.values(p.textBounds(s, x, y)));

  // 6
  x += 600, s = 'RIGHT BOTTOM\nis easy.';
  p.fill(0) && p.noStroke() && p.textAlign(p.RIGHT, p.BOTTOM) && p.text(s, x, y);
  if (showBB) p.noFill() && p.stroke(0) && p.rect(...Object.values(p.textBounds(s, x, y)));

  //////////////////////////// CENTER (L,C,R) /////////////////////////////////
  y += 70;
  p.stroke(0) && p.strokeWeight(1) && p.line(0, y, p.width, y); //h-line

  x = 10, s = 'LEFT CENTER\nis easy.';
  p.fill(0) && p.noStroke() && p.textAlign(p.LEFT, p.CENTER) && p.text(s, x, y);
  if (showBB) p.noFill() && p.stroke(0) && p.rect(...Object.values(p.textBounds(s, x, y)));

  x += 580, s = 'CENTER CENTER\nis easy.';
  p.fill(0) && p.noStroke() && p.textAlign(p.CENTER, p.CENTER) && p.text(s, x, y);
  if (showBB) p.noFill() && p.stroke(0) && p.rect(...Object.values(p.textBounds(s, x, y)));

  x += 600, s = 'RIGHT CENTER\nis easy.';
  p.fill(0) && p.noStroke() && p.textAlign(p.RIGHT, p.CENTER) && p.text(s, x, y);
  if (showBB) p.noFill() && p.stroke(0) && p.rect(...Object.values(p.textBounds(s, x, y)));

  ///////////////////////////// TOP (L,C,R) ///////////////////////////////
  y += 70;
  p.stroke(0) && p.strokeWeight(1) && p.line(0, y, p.width, y); //h-line

  x = 10, s = 'LEFT TOP\nis easy.';
  p.fill(0) && p.noStroke() && p.textAlign(p.LEFT, p.TOP) && p.text(s, x, y);
  if (showBB) p.noFill() && p.stroke(0) && p.rect(...Object.values(p.textBounds(s, x, y)));

  x += 580, s = 'CENTER TOP\nis easy.';
  p.fill(0) && p.noStroke() && p.textAlign(p.CENTER, p.TOP) && p.text(s, x, y);
  if (showBB) sp.noFill() && p.stroke(0) && p.rect(...Object.values(p.textBounds(s, x, y)));

  x += 600, s = 'RIGHT TOP\nis easy.';
  p.fill(0) && p.noStroke() && p.textAlign(p.RIGHT, p.TOP) && p.text(s, x, y);
  if (showBB) p.noFill() && p.stroke(0) && p.rect(...Object.values(p.textBounds(s, x, y)));

  saveCanvas('boundingBoxBreaks.p5.jpg');
}
