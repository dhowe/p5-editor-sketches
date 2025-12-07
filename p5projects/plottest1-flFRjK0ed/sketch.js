p5.disableFriendlyErrors = true; 

let bDoExportSvg = false; 
let numLines, pixelsPerLine = 10;
function setup(){
  createCanvas(816, 1056);  // 8.5"x11", 96 dpi
  numLines = floor(width/pixelsPerLine)-1;
}

function keyPressed(){
  if (key == 's') bDoExportSvg = true; 
}

function draw(){
  background(255); 
  if (bDoExportSvg){
    beginRecordSvg(this, "myOutput.svg");
  }

  // Draw stuff here, such as:
  for (let i = 1; i <= numLines; i++) {
    line(i * pixelsPerLine, 10, i * pixelsPerLine, height-10); 
  }

  if (bDoExportSvg){
    endRecordSvg();
    bDoExportSvg = false;
  }
}