
let p = window;
let x, y, w = 200, h = 70, showBB = 1;
let s, suf = 'text gonna wrap when it gets too long and is then breaking.';

p.setup = function () {
  p.createCanvas(1010, 430);
  p.background(255);
  p.loadFont("Lato-Black.ttf", font => {
    p.textFont(font);
    p.textSize(20);
    p.textLeading(22);
    //p.rectMode(p.CENTER);

    x = 170, y = 80;
    p.noFill() && p.stroke(0) && p.strokeWeight(1) && p.rect(x, y, w, h);
    p.fill(0) && p.noStroke() && p.textAlign(p.LEFT, p.TOP) && p.text(suf, x, y, w, h);
    let bb =  font.textBounds(suf, x, y);
    p.noFill() && p.stroke('red') && p.rect(bb.x,bb.y,bb.w,bb.h);
    //console.log(font.textBounds(suf, x, y));
  });

}