let poly, red, ared;

function setup() {
  
  createCanvas(800, 800);
  red = color(224,37,37);
  colorMode(HSB, 1);
  //red = color(0.011, 0.78, 0.78, 1);
  ared = color(0.011, 0.902, 0.63, 0.015);
  
  //blendMode(MULTIPLY);
  
  background(0.13, 0.02, 0.98);
  noStroke();

  let b1 = new Blob(width / 2, height * 0.3, 100, { depth: 4 });
  
  fill(ared);
  b1.render(150,5,0.5);
  
  translate(0,300);
  fill(red);
  b1.draw();


  //console.log(alphaDiv(100));
  //console.log(this._renderer._cachedFillStyle);
  // let col = hsb(...this._renderer._cachedFillStyle.replace(/[^0-9,]/g,'').split(',').map((s,i) => i < 3 ? parseFloat(s): parseFloat(s)*255));
  // let alpha = col.levels[3]/255;
  // console.log(...col.levels);
  // console.log(col.levels[3]/255);
  // col.setAlpha(alpha/100.0);
  // console.log(...col.levels);
  //b1.draw();
  //let b2;// = new Blob(width / 2, height * 0.5, 80, { deforms: 7 });
  //for (let j = 0; j < 1; j++) {
    //fill(hsb(200,55,44,0.04 * 255));
    //fill(0.01,0.78,0.78,0.04);
    //fill(hsb(0, 4));
    //b1 && b1.render(100);
    //b1.center.x += 30;
    //fill(0.9, 0.78, 0.78, 0.04);
    //fill(hsb(10, 4));
    //b2 && b2.render(10);
    //b2.center.y += 30;
  //}
}
