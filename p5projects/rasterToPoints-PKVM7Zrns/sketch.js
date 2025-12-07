function setup() {
  createCanvas(500, 200);
  background(0);
  stroke(255);
  strokeWeight(2);
  
  textRasterToPoints("Dog", 70, 150, "Georgia", 200)
    .forEach((p) => point(p.x, p.y));
}

function textRasterToPoints(s, x, y, font, fsize) {
  
  // should use cached canvas if run multiple times
  const cvs = document.createElement("canvas");
  const ctx = cvs.getContext("2d");

  // set dimensions to match the p5 canvas
  cvs.width = width;
  cvs.height = height;

  // render to hidden canvas with font
  ctx.font = `${fsize}px ${font}`;
  ctx.fillText(s, x, y);

  // get image data from the hidden canvas
  const imageData = ctx.getImageData(0, 0, cvs.width, cvs.height).data;
  const points = [];
  for (let y = 0; y < cvs.height; y += 4) {
    for (let x = 0; x < cvs.width; x += 4) {
      const idx = (y * cvs.width + x) * 4;
      if (imageData[idx + 3] > 128) {
        // threshold alpha
        points.push({ x, y });
      }
    }
  }

  return points;
}
