let img, numLines = 50;

function preload() {
  img = loadImage("dhimage.jpg");
}

function setup() {
  createCanvas(540, 540);
  background(255);
  noStroke();
  fill(0);
  
  img.resize(0, numLines);
  img.loadPixels();
  
  let curves = imageCurves(img, numLines);
  
  scale(height / numLines);
  for (let pts of curves) {
    beginShape();
    pts.forEach(p => curveVertex(p.x, p.y) );
    endShape(CLOSE);
  }
}

 // adapted from https://editor.p5js.org/Estienne/sketches/9aYpczTzf 
function imageCurves(img, lines, thickness = 1) {

  let rows = [];
  for (let y = 0; y < img.height; y++) {
    let row = rows[y] = [];
    for (let x = 0; x < img.width; x++) {
      let idx = 4 * (x + y * img.width);
      let darkness = 1 - img.pixels[idx] / 255;
      let weight = thickness * darkness/2;
      
      // first pixel of row
      if (x == 0) {
        rows[y].push({ x: x - 2, y: y + 0.5 - weight}); 
        rows[y].unshift({ x: x - 2, y: y + 0.5 + weight}); 
        rows[y].push({ x: x, y: y + 0.5 - weight});
        rows[y].unshift({ x: x, y: y + 0.5 + weight});
      }
      
      rows[y].push({ x: x + 0.5, y: y + 0.5 - weight}); // add to end 
      rows[y].unshift({ x: x + 0.5, y: y + 0.5 + weight}); // add to start
       
      // last pixel of row
      if (x == img.width - 1) {
        rows[y].push({ x: x + 1, y: y + 0.5 - weight});
        rows[y].unshift({ x: x + 1, y: y + 0.5 + weight});
        rows[y].push({ x: x + 3, y: y + 0.5 - weight});
        rows[y].unshift({ x: x + 2, y: y + 0.5 + weight});
      }
    }
  }
  return rows;
}


